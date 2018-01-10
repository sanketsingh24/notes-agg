import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUrl, (err, db) => {
  assert.equal(null, err);

  db.collection('')
})
