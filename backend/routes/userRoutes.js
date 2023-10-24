const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getUsers, deleteUser} = require('../controllers/userController')

//Register users to the database
router.post('/register', registerUser)

//Logging in users
router.post('/login', loginUser)

//fetch all users
router.get('/', getUsers);

//Delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router
































// const express = require('express');
// const User = require('../models/UserModel.js');
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const router = express.Router();


// router.post("/register",  async (req, res) => {
//     try {
//         // Extract email and password from the request body
//         // const { email, password } = req.body;

//         // Check if the email already exists
//         // const existingUser = await User.findOne({ email });
//         // if (existingUser) {
//         //   return res.status(400).json({ message: "Email already exists" });
//         // }

//         // Hash the password
//         // const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = new User({
//             email: req.body.email,
//             password: req.body.password,
//         });
        
//         await newUser.save();
//         // Save the user in the database
//         // const savedUser = await newUser.save();
//         // const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, "secret-key");
//         // res.json(savedUser, token);
//         // Generate JWT token

//         // Return the token and user details in the response
//         // res.json({ token, user });
//         // res.json({ newUser });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// // login route setup
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // checking email that was entered and comparing email in our database
//     const user = await User.findOne({ email: email });
//     if (!user) {
      
//       res.status(400)
//       res.json({ msg: "Invalid credentails" });
//     }

//     // Checking password entered and comparing with hashed password in database
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Invalid credentials" });
//     }

//     // Creating our json web token by passing the user id and our JWT_SECRET
//     const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, 'secret');
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ err: error.message });
//   }
// });

// module.exports = router;