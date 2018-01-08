import express from 'express';
import info from '../src/data/info_embedded';
const router = express.Router();

router.get('/info', (req,res) => {
  res.send({ courses: info.data });
});

export default router;
