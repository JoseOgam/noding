const RegisterUser = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if a user exists with the given email
    const user = await RegisterUser.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // If user does not exist, hash the password and save the new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new RegisterUser({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message: "User saved successfully",
      success: true,
      savedUser,
    });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exist by a given email

    const user = await RegisterUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "uesr does not exist" });
    }

    // check if provided password is correct

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "incorrect password" });
    }

    //Create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      name: user.name,
    };

    // create token that expiers in 1hr

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({
      message: "login successful",
      token,
    });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

module.exports = { registerUser, loginUser };
