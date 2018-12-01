const restful = require('node-restful');
const mongoose = restful.mongoose
const user = require('../models/user');

const postSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required: true
    },
    username: {
        type:String,
        required: true
    }
});

module.exports = restful.model('Post',postSchema);