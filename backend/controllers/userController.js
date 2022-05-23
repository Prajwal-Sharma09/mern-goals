// desc  Register new user
//route  POST /api/users
//desc   Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// desc  Authenticate a user
//route  POST /api/users/login
//desc   Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// desc  get user data
//route  GET /api/users/me
//desc   Public
const getMe = (req, res) => {
  res.json({ message: "User Data Display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
