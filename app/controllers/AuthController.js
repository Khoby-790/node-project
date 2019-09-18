import passport from 'passport';
import mongoose from 'mongoose';





class AuthController {

    static index(req, res, next){
        res.render('login');
    }


    static register(req, res, next){
        const { email, password, password2, gender, name } = req.body;

        
    }

}


