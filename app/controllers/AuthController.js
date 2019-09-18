import passport from 'passport';
import mongoose from 'mongoose';
import Utils from '../utils/index';
import User from '../models/user.model';



class AuthController {

    static index(req, res, next){
        res.render('login');
    }


    static async register(req, res, next){
        const { email, password, password2, gender, name } = req.body;

        let user = await User.findOne({ email });

        if(user){
            req.flash('error_msg','email already exists');
            res.redirect('back');
        }
        req.checkBody('email','provide a valid email address').notEmpty().isEmail();
        req.checkBody('name','We could use a name you know?').notEmpty();
        req.checkBody('password','Please provide a means of locking your account (Password)').notEmpty().isLength({min: 6, max: 12});
        req.checkBody('password2', 'Please provide a confirmation password').notEmpty().equals(password);
        const errors = req.validationErrors();
        if(errors){
            req.flash('errors',errors);
            res.redirect('back');
        }
        user = new User({
            email,
            name,
            password,
            gender,
        });

        user.password = await Utils.generateHash(password);

        user.save();

        res.flash('success_msg','Account created you can now login to your account');
        res.redirect('/login');

    }

}

export default AuthController
