// router.js
// Originally it was api.js
//

const mongoose = require('mongoose');

const express = require('express');
const router = express.Router();

//const StudentModel = require('../models/PostSchema');
require('dotenv').config();

// Connecting to database
const query = process.env.MONGO_URI;

const Post = require('../models/PostSchema');

router.get('/', (req, res) => {
//    res.send('top page.');
    res.render('pages/index');
});

router.get('/create', (req, res) => {
    //    res.send('about page.');
    res.render('pages/create');
});
    
router.get('/about', (req, res) => {
//    res.send('about page.');
    res.render('pages/about');
});

router.post('/v1/addentry', async(req, res) => {
	const newPost = await Post({
            kanji_name: req.body.kanji_name,
            age: req.body.age,
            phone_num: req.body.phone_num,
            zip_code: req.body.zip_code,
            user_address: req.body.user_address,
    });
    await newPost.save();
//    res.status(200).json(newPost);
		res.redirect('/api');
});

router.post('/api/v1/searchresult', async(req, res) => {
	console.log("req.body: ", req.body);
	res.status(200).json(req.body);
});

module.exports = router;
