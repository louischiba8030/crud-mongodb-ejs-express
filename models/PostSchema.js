// studentschema.js

const mongoose = require('mongoose');

//const StudentSchema = new mongoose.Schema({
//    StudentId: Number,
//    Name: String,
//    Birthday: Date,
//    Address: String
//});

const PostSchema = new mongoose.Schema(
    {
        kanji_name: {
            type: String,
        },
        age: {
            type: Number,
        },
        phone_num: {
            type: String, /* Number */
        },
        zip_code: {
            type: String,
        },
        user_address: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

//module.exports = mongoose.model(
//    'student', StudentSchema, 'Students'
//);
module.exports = mongoose.model('Post', PostSchema);
