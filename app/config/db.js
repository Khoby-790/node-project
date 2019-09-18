import mongoose from 'mongoose';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true 
}

module.exports = (dbUrl) =>{
    mongoose.connect(dbUrl,options)
    .then(()=>console.log('Database Connected'))
    .catch((err)=>console.log('Database not connected'))
    // require('../models/user.model');
    // require('../models/blog.nodel');
}