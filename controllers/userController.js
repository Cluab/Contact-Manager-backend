const asyncHandler = require('express-async-handler');

//@desc Register a user
//@route Post /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register the user' });
});

//@desc Login a user
//@route Post /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'login the user' });
});

//@desc get current user
//@route Post /api/user/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Current user information' });
});

module.exports = { registerUser, loginUser, currentUser };
