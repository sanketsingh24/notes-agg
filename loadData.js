import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUrl, (err, db) => {
  assert.equal(null, err);

  db.collection('depts').insertMany([
    {
      dept_name : 'Applied Geology',
      dept_id : 'GLC',
      id : 1,
      imge: 'img/AGL.png',
      course_ids : [113105,114104]
    },
    {
      dept_name : 'Computer Science and Engineering',
      dept_id : 'CSE',
      id : 2,
      imge: 'img/CSE.png',
      course_ids : [213101,214102]
    }
  ]).then(response => {
    console.info('depts',response.insertedCount);
    db.collection('subjects').insertMany([
      {
        sem_no : 4,
        course_name : 'Igneous Petrology',
        id : 114104,
        course_id : 'GLC14104',
        books : [
          {
            name : 'Igneous Rocks and Processes',
            link : 'https://drive.google.com/open?id=1neQLVw6eTPZXi_VZDWib2hCqomDiM4we',
            rating : '5/10'
          }
        ],
        Topic_Videos : [
          {
            name : 'Everything about Igneous rocks',
            type : 'Playlist',
            link : 'https://www.youtube.com/watch?v=PrN7jygu4cQ&list=RDQM6d7N0Xzgo9Q',
            rating : '4/10'
          }
        ],
        Online_Courses : 'APIs',
        Notes : [
          {
            professor : 'R Anand',
            year : '2017-18',
            link : 'https://drive.google.com/open?id=0B_XYsz-weqCGekZGQXN5TVN1UDg',
            rating : '8/10'
          }
        ],
        Presentations : [
          {
            topic : 'Igneous Textures',
            professor : 'R Anand',
            year : '2017-18',
            link : 'https://drive.google.com/open?id=1vbHSNp2Ugr6pV-xvYACkZPAUS54kFpII',
            rating : '8/10'
          }
        ]
      },
      {
        course_name : 'Metamhorphic ptani',
        id : 113105,
        course_id : 'GLC13105',
        sem_no : 3,
        books : [
          {
            name : 'Metamhorphic Rocks and Processes',
            link : 'https://drive.google.com/open?id=1neQLVw6eTPZXi_VZDWib2hCqomDiM4we',
            rating : '5/10'
          }
        ],
        Topic_Videos : [
          {
            name : 'Everything about Metamhorphic rocks',
            type : 'Playlist',
            link : 'https://www.youtube.com/watch?v=PrN7jygu4cQ&list=RDQM6d7N0Xzgo9Q',
            rating : '4/10'
          }
        ],
        Online_Courses : 'APIs',
        Notes : [
          {
            professor : 'U Dutta',
            year : '2017-18',
            link : 'https://drive.google.com/open?id=0B_XYsz-weqCGekZGQXN5TVN1UDg',
            rating : '8/10'
          }
        ],
        Presentations : [
          {
            topic : 'Metamhorphic Textures',
            professor : 'U Dutta',
            year : '2017-18',
            link : 'https://drive.google.com/open?id=1vbHSNp2Ugr6pV-xvYACkZPAUS54kFpII',
            rating : '8/10'
          }
        ]
      },
      {
        course_name : 'Data Structures',
        id : 213101,
        course_id : 'CSE13101',
        sem_no : 3,
        books : [
          {
            name : 'Introduction to Algorithms',
            link : 'https://drive.google.com/open?id=0B_XYsz-weqCGekZGQXN5TVN1UDg',
            rating : '10/10'
          }
        ],
        Topic_Videos : [
          {
            name : 'Data Structures',
            type : 'Playlist',
            link : 'https://www.youtube.com/watch?v=92S4zgXN17o&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=1',
            rating : '4/10'
          }
        ],
        Online_Courses : 'APIs',
        Notes : [
          {
            professor : 'C Kumar',
            year : '2017-18',
            link : 'https://drive.google.com/open?id=0B_XYsz-weqCGR3lMQVhMOHppV0k',
            rating : '4/10'
          },
          {
            professor : 'T Kaibratta',
            year : '2016-17',
            link : 'https://drive.google.com/open?id=0B_XYsz-weqCGR3lMQVhMOHppV0k',
            rating : '10/10'
          }
        ]
      },
      {
        course_name : 'OOPS',
        id : 214102,
        course_id : 'CSE14102',
        sem_no : 4,
        books : [
          {
            name : 'Introduction to OOPS',
            link : 'https://drive.google.com/open?id=0B_XYsz-weqCGekZGQXN5TVN1UDg',
            rating : '10/10'
          }
        ],
        Topic_Videos : [
          {
            name : 'OOPS',
            type : 'Playlist',
            link : 'https://www.youtube.com/watch?v=92S4zgXN17o&list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&index=1',
            rating : '4/10'
          }
        ],
        Online_Courses : 'APIs',
        Notes : [
          {
            professor : 'H Banka',
            year : '2017-18',
            link : 'https://drive.google.com/open?id=0B_XYsz-weqCGR3lMQVhMOHppV0k',
            rating : '4/10'
          },
          {
            professor : 'ACS Rao',
            year : '2016-17',
            link : 'https://drive.google.com/open?id=0B_XYsz-weqCGR3lMQVhMOHppV0k',
            rating : '10/10'
          }
        ]
      }
    ]).then(response => {
      console.info('subjects', response.insertedCount);
      db.close();
    });
  });
});
