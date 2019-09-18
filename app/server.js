import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import session from 'express-session';
import validator from 'express-validator';
import ErrorHandlers from './Config/ErrorHandlers';


require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
require('../app/config/db')(dbUrl);
// require('../app/models/user.model');
// require('../app/models/blog.nodel');

const app = express();

//set view engine
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');


// //where to locate views
// console.log(__dirname)
app.set('views', path.join(__dirname + '/../views'));

// //where to locate static files;
app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(validator());

// //Express session
app.use(
    session({
        secret: process.env.secret || 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(flash());

// //for global variables
app.use(function(req, res, next) {
    res.locals.user = req.user || null;
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//routes
app.use('/', require('../routes/index'));
app.use('/users', require('../routes/users'));



//for 404 errors
app.use(ErrorHandlers.notFound);

//for development errors
if (process.env.NODE_ENV == 'development') {
    //prints stack
    app.use(ErrorHandlers.developmentErrors);
} else {
    app.use(ErrorHandlers.productionErrors);
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`));