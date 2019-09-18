
import { Schema, model } from 'mongoose';


const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'female','not specified'],
        required: false,
        default: 'not specified'
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
        required: false
    }
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

schema.virtual('blogs',{
    ref: 'Blog',
    localField: '_id',
    foreignField: 'userId'
})



module.exports = model('User',schema);

