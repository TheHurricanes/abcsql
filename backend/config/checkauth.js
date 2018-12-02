const User = require('../models/user');
const config = require('./database');
const jwt = require('jsonwebtoken');

module.exports  = (req,res,next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,config.secret);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            msg : error
        });
    }
}



