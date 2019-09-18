import { Router } from 'express';

const Route = Router();

//controllers
import HomeController from '../app/controllers/HomeController';
import AuthController from '../app/controllers/AuthController';
import utils from '../app/utils/index';
import passport from 'passport';
import Utils from '../app/utils/index';


Route.route('/login')
    .get(HomeController.login)
    .post(Utils.middleware, passport.authenticate('local',{
        failureFlash: true,
        failureRedirect: '/users/login',
        successRedirect:'/continue'
    }))

Route.get('/continue',(req, res)=>{
    let path = req.session.continuePath;
    delete req.session.continuePath;
    res.redirect(path || '/');
})

Route.route('/register')
    .get(HomeController.register)
    .post(AuthController.register)

module.exports = Route