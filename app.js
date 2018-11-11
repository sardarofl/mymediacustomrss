const express   = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const session  = require('express-session');
const mongoose = require('mongoose');
var cors=require('cors');
const config = require("./config/database")
const passport = require('passport');


//connect to database
mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected', () => {
  console.log('connected to database '+config.database);
});
//on error
mongoose.connection.on('error', () => {
  console.log('Database Erro '+config.database);
});



//express
const app = express();

app.use(express.static(path.join(__dirname, 'distcustomrssfeed')));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


//port
const port = process.env.PORT || 3019;

//cors
app.use(cors());

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//index route
app.get('/',(req,res) =>{
  res.send('Invalid Endpoint');
})


//routers
const fetch = require('./routes/fetchs');
const add = require('./routes/adds');
const d_delete = require('./routes/deletes');
const s_set = require('./routes/sets');
const users = require('./routes/users');
const twitter = require('./routes/twitters');

//use routers
app.use('/fetchs',fetch);
app.use('/additems',add);
app.use('/deletes',d_delete);
app.use('/sets',s_set);
app.use('/users',users);
app.use('/twitter',twitter);

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, 'distcustomrssfeed/index.html'));
});

app.get('/bemain/customrssback', (req,res) =>{
  res.sendFile(path.join(__dirname, 'distcustomrssfeed/index.html'));
});

app.get('/customrssfront', (req,res) =>{
  res.sendFile(path.join(__dirname, 'distcustomrssfeed/index.html'));
});

app.get('/twitterfeedmymedia', (req,res) =>{
  res.sendFile(path.join(__dirname, 'distcustomrssfeed/index.html'));
});


app.listen(port,  () => {
  console.log('Server started on port'+port);
});
