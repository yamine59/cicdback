const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const connectToDb = require('./db.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());



connectToDb();

const users = require('./routes/users.js')
app.use('/users', users);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})