let express = require('express');
let app = express();
let mongoose = require('mongoose');
let User = require('./models/user');
let Project = require('./models/project')
require('./db/db');
const port = 3001
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});











