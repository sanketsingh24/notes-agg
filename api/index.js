import express from 'express';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';


let mdb;
MongoClient.connect(config.mongodbUrl, (err,db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/info', (req, res) => {
    let dept = {};
    mdb.collection('depts').find({})
        .project({
            _id: 0
        })
        .each(function(err, docs) {
            assert.equal(err, null);

            if(!docs){
                res.send( {dept} );
                return;
            }

            dept [docs.id] = docs;
        });
});

// router.get('/subjects/:subjectIds', (req, res) => {
//   const allSubIds = req.params.subjectIds.split(',').map(Number);
//   let subjects= {};
//   mdb.collection('subjects').find({ id: {$in: allSubIds}})
//     .project({
//       _id: 0
//     })
//     .each(function(err, docs) {
//       assert.equal(err, null);
//
//       if(!docs){
//           res.send( {subjects} );
//           return;
//       }
//
//       subjects[docs.id] = docs;
//     });
// });

export default router;
