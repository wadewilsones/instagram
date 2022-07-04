import mongoose from "mongoose";

const { Schema } = mongoose;

const postDb = new Schema({
    username:String,
    userIcon:String,
    likes: Number,
    comments: [],
    descr: String,
    image:String,
});

export default mongoose.model('makePost', postDb)


