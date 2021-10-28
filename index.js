let express = require('express');
let app = express();
let mongoose = require('mongoose');
let User = require('./models/user');
let users = require('./routes/users')
let Project = require('./models/project')
let cors = require('cors')
require('./db/db');

app.use(cors({ credentials: true, Origin: '*' }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());
const port = 3001
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.use(users);












