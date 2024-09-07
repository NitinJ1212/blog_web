const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dgbtfd4o8',
    api_key: '389669517236151',
    api_secret: 'lN2fQaiCZNPaRbzT7U4g70zLJ8Q'
});

module.exports = cloudinary;