const express = require('express');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (checkMimeType(file)) {
        let filePath = path.join(__dirname + 'public/blogimg');
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        cb(null, filePath);
      } else {
        cb(new Error('Invalid file type. Please upload a valid file.'));
      }
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage: storage });

  module.exports=upload;