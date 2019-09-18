
import bcrypt from 'bcryptjs';

class Utils {
    static generateHash(word){
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(word, salt, (err, hash)=>{
                return hash;
            })
        })
    }
}

export default Utils;