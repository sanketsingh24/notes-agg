import express from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';


let mdb;
MongoClient.connect(config.mongodbUrl, (err,db) => {
  assert.equal(null, err);

  mdb = db;
})

const router = express.Router();

router.get('/info', (req, res) => {
  let courses = {};
  mdb.collection('depts').find({})
    .project({
      _id: 0
    })
    .each(function(err, docs) {
      assert.equal(err, null);

      if(!docs){
        res.send( {courses} );
        return;
      }

      courses[docs.id] = docs;
    });
});

router.get('/info/:deptId', (req,res) => {
//  console.log(req.params.deptId + ' api')
  mdb.collection('depts')
    .findOne({ id: Number(req.params.deptId)})
    .then(docs => res.send( {docs} ))
    .catch(console.error);
});

router.get('/subjects/:subjectIds', (req, res) => {
  const allSubIds = req.params.subjectIds.split(',').map(Number);
  let subjects = {};
  mdb.collection('subjects').find({ id: {$in: allSubIds}})
    .project({
      _id: 0
    })
    .each(function(err, docs) {
      assert.equal(err, null);

      if(!docs){
        res.send( {subjects} );
        return;
      }

      subjects[docs.id] = docs;
    });
});

export default router;
