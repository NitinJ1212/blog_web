const express = require('express');
const { body, validationResult } = require('express-validator');
const validateEmail = [
    // Check if 'email' parameter exists and is not empty
    body('email').notEmpty().withMessage('Email is required'),
  
    // Check if 'email' parameter is a valid email address
    body('email').isEmail().withMessage('Invalid email address')
  ];

module.exports = validateEmail