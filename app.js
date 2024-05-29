const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogroutes = require('./routes/blogroutes');
const app = express();

//Database Connection
mongoose.connect('mongodb+srv://rajkumar:12345@nodetuts.qumhofy.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=nodetuts')
.then((result) => {
    console.log('Connected to Database');
    //Listening on Port 3000
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
});

//Default Folder is views
app.set('view engine','ejs');

//Middleware & Static Files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//..Handlers..

//Routing to Index Page
app.get('/',(req,res) => {
    //Redirecting to Blogs Page
    res.redirect('/blogs');
});

//Routing to About Page
app.get('/about',(req,res) => {
    res.render('about',{title : 'About'});
});

//Blog Routes
app.use('/blogs',blogroutes);

//Default Page (404)
app.use((req,res) => {
    res.render('404',{title : '404'});
});