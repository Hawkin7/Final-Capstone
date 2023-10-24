const User = require('../models/userModel.js')
const jwt = require("jsonwebtoken");
const secret = "mysecret"


const generateToken = (_id, isAdmin) => {
    return jwt.sign({_id, isAdmin}, secret)
}

//Registering the user to the database
const registerUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.registering(email, password)

        // const token = generateToken(user._id, user.isAdmin)
        const token = generateToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Logging the user in
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.loggingIn(email, password)
        
        //Generate a token with the generateToken function
        
        let isAdmin = false;
        if (email === 'admin@gmail.com' && user.isAdmin) {
            isAdmin = true;
        }
        const token = generateToken(user._id, user.isAdmin)

        res.status(200).json({email, token, isAdmin})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Fetch all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//Delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (deletedUser) {
            res.status(200).json({ message: 'User removed' });
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { loginUser, registerUser, getUsers, deleteUser }