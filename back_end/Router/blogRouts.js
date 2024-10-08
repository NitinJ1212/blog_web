const express = require("express")
const router = express.Router();
const blogController = require('../controllers/blogController');
const verifyToken = require("../mideleWhere/checkUser");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the destination folder for uploaded files
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Define the filename (use original name or generate a new name)
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadStorage = multer({ storage: storage })

router.post('/addImage', uploadStorage.single("file"), blogController.addBlogImage);
router.post('/upload-form', uploadStorage.single("file"), blogController.uploadForm)
router.post('/allblog', blogController.allBlogFind);
router.post('/addblog', verifyToken, blogController.addBlog);
router.post('/blogById', blogController.blogById);

// WORK BY NITIN 

router.post('/setcookie', blogController.setCookie);

router.post('/blog/addcatagory', blogController.addCatagory);
router.get('/blog/getcatagory', blogController.getcatagory);
router.post('/blog/like',verifyToken, blogController.likePost);
router.post('/blog/unlikePost',verifyToken, blogController.unlikePost);
router.post('/blog/addComment',verifyToken, blogController.addComment);
router.post('/blog/deleteComment', blogController.deleteComment);
module.exports = router