
import bcrypt from 'bcryptjs';

class Utils {
    static generateHash(word, cb){
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(word, salt, (err, hash)=>{
                cb(hash);
            })
        })
    }


    static middleware(req, res, next){
        if(!req.isAuthenticated()){
            req.session.continuePath = req.path;
            req.flash('error_msg','You have to be signed in to access this page');
            res.redirect('/users/login');
        }
    }
}

export default Utils;