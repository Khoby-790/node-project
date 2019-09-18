import express from 'express';
import path from 'path';
import flash from 'connect-flash';
import ErrorHandlers from './Config/ErrorHandlers';


const app = express();

//set view engine 
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');

//where to locate views
app.set('views', path.join(__dirname + '/../views'));

//where to locate static files
app.use(express.static(path.join(__dirname, 'public')));

//middleware parser
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(flash());

//for global variables
app.use(function(req, res, next) {
    res.locals.user = req.user || null;
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
});

//app.use('/',require('../routes/index'));

app.get('/hello', (req, res) => {
    res.send("Emmanuel Baidoo")
})



//for 404 errors
app.user(ErrorHandlers.notFound());

//for development errors
if (process.env.NODE_ENV == 'development') {
    //prints stack
    app.use(ErrorHandlers.developmentErrors());
} else {
    app.use(ErrorHandlers.productionErrors());
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on ${port}`));