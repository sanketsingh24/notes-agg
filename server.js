import config from './config';
import apiRouter from './api';
import express from 'express';
const server = express();

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res)=> {
  serverRender()
    .then(( { initialMarkup, initialinfo } ) => {
      res.render('index',{
        initialMarkup,
        initialinfo
      });
    })
    .catch(console.error)

});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port,config.host, () => {
  console.info('Express on port ', config.port,config.host);
});
