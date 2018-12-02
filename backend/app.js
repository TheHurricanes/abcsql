const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database,{useNewUrlParser:true});

//On connection
mongoose.connection.on('connected',() => {
    console.log('Connected to database: '+ config.database);
});

//On connection
mongoose.connection.on('error',(err) => {
    console.log('Database error: '+ err);
});

const app = express();

const users = require('./routes/users');
const news = require('./routes/news');

const port = 3000;

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/users',users);

app.use('/news',news);


// //Index Route
// app.get('/',(req,res) => {
//     res.send('INDEX endpoint');
// });

app.listen(port, () => {
    console.log('Server started on port :' + port);
})

