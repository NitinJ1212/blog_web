const User = require('../models/user');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const signupUser = async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return validation errors if any
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
<<<<<<< HEAD
    console.log(req.body);
    const finduser = await User.findOne({
      email: email

=======
    const finduser = await User.findOne({
      email: email
>>>>>>> 63641af0b396cbf8ef9660c63ae9037ec339f57c
    })

    if (finduser) {
      return res.status(200).send({ msg: "user allready account" });
    }


    const newUser = new User({ username, email, password });
    const token = await newUser.generateAuthToken()
    const savedUser = await newUser.save();

    if (savedUser) {
      return res.status(200).send({ savedUser, msg: true, token });
    }


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const longin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send('Invalid username or password');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send('Invalid username or password');
    }

    const token = await user.generateAuthToken()
    res.status(200).json({ msg: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
};


const home = async (req, res) => {
  try {



    res.status(201).send({ "savedUser": "jhbhjbjhnj", "token": "jijijijuij", htmlContent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  longin,
  home
}