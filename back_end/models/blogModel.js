const mongoose = require('mongoose');

// Define the Comment schema
const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define the Post schema
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: false
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    part: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId, // Reference to the User model
            ref: 'User'
        }
    ],
    comments: [CommentSchema], // Embedding Comment schema
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Post model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
