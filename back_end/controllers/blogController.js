
const Post = require('../models/blogModel');
const User = require('../models/user');
const {Category} =  require('../models/catagory')
const cloudinary = require('./cloudinaryConfig')
const mongoose = require('mongoose');
const fs = require('fs');

const unlikf = async(postId,userId)=>{
    const post = await Post.findByIdAndUpdate(
        postId,
        { $pull: { likes: userId } }, // Use $pull to remove the user ID from the likes array
        { new: true } // Return the updated document
    );

}

const allBlogFind = async (req, res) => {
    try {
  
        let allblog  = await Post.find({  })
        res.status(200).send({ allblog, msg: "true" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addBlog = async (req, res) => {
    try {
        const { user_id, subtitle, title, part, description,
            category,
            language, } = req.body
        if (!title || !description || !category) {
            res.status(201).send({ msg: false });
        }
        const newBlog = new Post({
            user: user_id,
            title: title,
            subtitle: subtitle,
            description: description,
            category: category,
            part,
            category,
            language,
        });
        const savedUser = await newBlog.save();
        res.status(200).send({ message: "Blog added successfully", status: true });
    } catch (error) {
    
        res.status(500).json({ error: error.message });
    }
};

const addBlogImage = async (req, res) => {
    try {
        const { _id } = req.body
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const uploadResult = await cloudinary.uploader
            .upload(
                file.path, {
                public_id: 'shoes',
            }
            )
        if (uploadResult) {
            fs.unlinkSync(file.path);
            const exist = Post.findById({ _id: _id })
            if (exist) {
                const update = await Post.findByIdAndUpdate(_id, { image: uploadResult.secure_url }, { new: true })
            }
            res.status(200).send({ msg: "file save", status: true });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during upload' });
    }

}


const blogById = async (req, res) => {
    const { id } = req.body
    console.log(id);
    try {
        const allblog = await Post.findOne({ _id: id }).populate("likes", "username email  _id")
        .populate("comments", "username email -_id").populate('comments.user', 'username')
        

        res.status(200).send({ allblog, msg: "true" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// WORK BY NITIN 

const likeBlog = async (req, res) => {
    try {
        const { user_id, blog_id } = req.body
        if (!user_id, !blog_id) {
            return res.status(400).send({ status: false, msg: "User id or Blog id  is Missing." });
        }
        console.log("45555555555555555555555555", blog_id);
        //!mongoose.Types.ObjectId.isValid(userId)
        // const userExists = await User.findOne({ _id: user_id });
        // if (!userExists) {
        //     return res.status(404).json({ error: 'User not found' });
        // }
        // const blogExists = await Post.findOne({ _id: blog_id });
        // if (!blogExists) {
        //     return res.status(404).json({ error: 'Blog not found' });
        // }
        const Blogsa = await Post.findOne({ _id: blog_id })
        if (!Blogsa) {
            return res.status(400).send({ status: false, msg: "Blog is not Exist." });
        }
        console.log(Blogsa, ":::::::::::::::::::::");
        // if (Blogs.like.includes(user_id))

        //     res.status(200).send({ status: true, msg: "Blog Like Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 77
};
const setCookie = async (req, res) => {
    try {
        // Accessing cookies sent by the client
        const userLoggedIn = req.cookies;
        console.log("Cookies received:", userLoggedIn);

        // Setting a new cookie
        res.cookie("set_cookie", "this is setted cookie");

        // Sending response
        res.status(200).json({ data: "allblog", msg: "true" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const addCatagory = async (req, res) => {
    const { catagory } = req.body;

    if (!catagory) {
        return res.status(400).json({ error: 'Category is required' });
    }

    try {
        const newCategory = new Category({
            catagory,
            // If you need to add additional fields in the future, uncomment and use as needed.
            // createdByUser: req.user ? req.user._id : null,
            // createdAt: new Date()
        });

        console.log('New category:', newCategory);

        const savedCategory = await newCategory.save();

        console.log('Saved category:', savedCategory);

        res.status(200).send({ savedCategory, msg: 'Category added successfully' });
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).json({ error: error.message });
    }
};

const getcatagory = async (req, res) => {
    try {
        const category = req.body.data
        let allcatagory
        
       
        allcatagory = await Category.find({ })
        res.status(200).send({ allcatagory, msg: "true" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Like a post

const likePost = async (req, res) => {
  const userId = req.user; // Assuming req.user contains the authenticated user's ID
  console.log(userId._id); 
  const { postId } = req.body; // Post ID should be provided in the request body

  if (!postId) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }

  // Ensure that the userId is a valid ObjectId
  
  try {
    // Check if the user already liked the post
    const postExists = await Post.findOne({
      _id: postId,
      likes: { $in: [userId] }, // Ensure userId is cast to ObjectId
    });

    if (postExists) {
      // If user already liked the post, remove the like (unlike)
   const data =  await unlikf(postId,userId._id)

      return res.status(200).json({ message: 'Post unliked' ,data});
    } else {
      // If user has not liked the post, add the like
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $addToSet: { likes: userId } }, // Use $addToSet to avoid duplicate likes
        { new: true } // Return the updated document
      ).populate('likes', 'username email _id');

      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.status(200).json({ message: 'Post liked', post: updatedPost });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Unlike a post
const unlikePost = async (req, res) => {

    const {userId,postId} = req.body// User ID should be provided in the request body

    if (!postId) {
        return res.status(400).json({ error: 'Invalid post ID' });
    }

    try {
        const post = await Post.findByIdAndUpdate(
            postId,
            { $pull: { likes: userId } }, // Use $pull to remove the user ID from the likes array
            { new: true } // Return the updated document
        );

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};




// Add a comment to a post
const addComment = async (req, res) => {
    const userId = req.user
    console.log(userId);
  
    const {  text ,postId} = req.body; // User ID and comment text should be provided in the request body

    if (!userId || !text) {
        return res.status(400).json({ error: 'User ID and comment text are required' });
    }

    try {
        const comment = {
            user: userId,
            text: text,
            createdAt: new Date()
        };

        // Find the post by ID and push the new comment to the comments array
        const post = await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: comment } },
            { new: true } // Return the updated document
        );

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).send({ post, msg: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};




module.exports = {
    allBlogFind,
    addBlog,
    blogById,
    likeBlog,
    setCookie,
    addBlogImage,
    addCatagory,
    getcatagory,
    likePost,
    unlikePost,
    addComment,
}