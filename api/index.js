import express from 'express';
import info from '../src/data/info_embedded';

const router = express.Router();
const course = info.data.reduce((obj,course) => {
  obj[course.dept_id] = course;
  return obj;
}, {})

router.get('/info', (req,res) => {
  res.send({ courses: info.data });
});

export default router;
