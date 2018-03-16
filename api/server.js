const express = require('express');
const bodyParser = require('body-parser');
const lowdb = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const adapter = new FileAsync('db.json');
lowdb(adapter)
  .then((db) => {
    app.get('/', (req, res) => {
      res.json(db.get('test').value());
    });
  }).then(() => {
    app.listen(3000, () => console.log('listening on port 3000'));
  });
