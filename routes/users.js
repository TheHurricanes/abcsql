const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
const checkAuth = require('../config/checkauth');


//Register
router.post('/register',(req,res,next)=> { 
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password 
    });
    User.addUser(newUser,(err,user) => {
        if(err) {
            res.json({success:false, msg:'Failed to register user'});
        } else {
            res.json({success:true, msg:'User registered'});
        }
    });
});

//Authenticate
router.post('/authenticate',(req,res,next)=> {
     const username = req.body.username;
     const password = req.body.password;

     User.getUserByUsername(username,(err,user) => {
        if(err )throw err;
        if(!user) {
            return res.json({success:false,msg:"User not found"});
        }
        User.comparePassword(password,user.password,(err,isMatch) => {
            if (err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn:604000 // 1 week
                });
                res.json({
                    success: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username : user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success:false,msg:"You have entered a wrong username or password"});
            }
        });
     });
});

//Profile
router.get('/profile', checkAuth,
    function(req, res) {
        res.json(req.userData);
    }
);

module.exports = router;
