import {mongoose} from 'mongoose';


const PostSchema = new mongoose.Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    imgUrl: {type: String, default: 0},
    views: {type: Number, default: 0},
    author: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}]
}, {timestamps: true})


export default mongoose.model('Post', PostSchema)