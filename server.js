// Node.js + Express + MondoDB Atlas
// CRUD example 3
//
// 2022-05-09 (Mon.)
// Ryo Chiba
//
// https://www.geeksforgeeks.org/node-js-crud-operations-using-mongoose-and-mongodb-atlas/
//

const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const fs = require('fs');
const url = require('url');
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const port = process.env.PORT;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// middleware
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
// Parses the text as json
app.use(bodyParser.json());

const mongooseOptions = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}
mongoose.connect(
	process.env.MONGO_URI,
	mongooseOptions
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Load router module to application
const api = require('./routes/api');
app.use('/api', api);

app.listen(port, () => {
    console.log("Server is listening at port: " + port);
});