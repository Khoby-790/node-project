
import { Schema, model } from 'mongoose';


const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
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



export default model('User',schema);

