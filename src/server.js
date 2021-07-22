const express = require('express');
const path = require('path');
const fs = require('fs');

// ignore request for FavIcon. so there is no error in browser
const ignoreFavicon = (req, res, next) => {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end();
  }
  next();
};

// fn to create express server
const create = async () => {
  // server
  const app = express();

  // configure nonFeature
  // app.use(ignoreFavicon);
  app.use(express.static('public/'));
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/page2.html'));
  });

  // root route - serve static file
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/client.html'));
  });

  console.log('directory: ', __dirname);
  app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
      console.log('data: ', data);
      res.end(data);
    });
  });

  app.get('/getInfo', function (req, res) {
    fs.readFile(__dirname + '/employees.json', 'utf8', function (err, data) {
      console.log('data: ', data);
      res.end(data);
    });
  });

  app.post('/auth', function (req, res) {
    console.log('auth called');
    console.log(req.body);
    console.log('request:', req.body.username, req.body.password, req.body.id);
    fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
      const users = JSON.parse(data);
      console.log('users:', users);
      let beenReturned = false;
      for (let i = 0; i < users.length; i++) {
        const tempUser = users[i];
        console.log(tempUser);
        if (
          tempUser.username == req.body.username &&
          tempUser.password == req.body.password
        ) {
          console.log(true);
          res.send('true');
          beenReturned = true;
          break;
        }
      }
      if (!beenReturned) {
        console.log(false);
        res.send('false');
      }
    });
  });

  // Error handler
  /* eslint-disable no-unused-vars */
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  return app;
};

module.exports = {
  create,
};
