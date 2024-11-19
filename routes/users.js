const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
require("dotenv").config();
const connectToDb = require("../db.js");
const jwt = require("jsonwebtoken");

router.get('/test', (req, res) => {
  res.status(200).json({ coucou: "test" });
});



module.exports = router;
