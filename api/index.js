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
    mdb.collection('depts').find({})
        .project({
            _id: 0
        })
        .toArray(function(err, dept) {
          assert.equal(err, null);
          res.send({dept});
        });
});

router.get('/subjects/:subjectIds', (req, res) => {
  const allSubIds = req.params.subjectIds.split(',').map(Number);
  mdb.collection('subjects').find({ id: {$in: allSubIds}})
    .project({
      _id: 0
    })
    .toArray(function(err, subjects) {
      assert.equal(err, null);

      res.send({subjects})
    });
});

export default router;
