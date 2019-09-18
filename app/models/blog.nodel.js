
import { Schema, model } from 'mongoose';


const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

schema.virtual('user',{
    ref: 'User',
    localField: 'userId',
    foreignField:'_id',
    justOne: true
})



module.exports = model('User',schema);

