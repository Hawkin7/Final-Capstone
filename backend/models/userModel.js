const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
//Schema for the user endpoints
const userSchema = new mongoose.Schema({
	email: { 
		type: String, 
		required: true, 
		unique: true 
	},
	password: { 
		type: String, 
		required: true 
	},
	isAdmin: {
		type: Boolean,
		default: false,
	}
});

//Static methods for registering users
userSchema.statics.registering = async function(email, password, isAdmin) {

	//Checking if the user has filled the input fields
	if (!email || !password) {
		throw Error ('Please fill all required fields')
	}

	if (!email.endsWith('@gmail.com')) {
		throw Error ('Email must end with "@gmail.com"' )
	}

	//Validator module to check if the email is valid
	if (!validator.isEmail(email)) {
		throw Error ('Email is not valid')
	}

	//Checking if the user already exists
	const userExists = await this.findOne({ email })
	if (userExists) {
		throw Error('Email already registered')
	}

	//Using bcrypt to hash the password for security purposes
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	if ( email === 'admin@gmail.com') {
		isAdmin = true;
	}
	//Send the user data to the database 
	const user = await this.create({
		email, 
		password: hashedPassword,
		isAdmin
	})
	return user
}

//Static methods for logging in users 
userSchema.statics.loggingIn = async function(email, password) {

	//Checking if the user has filled the input fields
	if (!email || !password) {
		throw Error ('Please fill all required fields')
	}

	if (!email.endsWith('@gmail.com')) {
		throw Error ('Email must end with "@gmail.com"' )
	}

	//Checking email that was entered and comparing email in our database
	const user = await this.findOne({ email: email });
	if (!user) {
		throw Error ('Incorrect Email');
	}

	//Checking password entered and comparing with hashed password in database
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		throw Error ('Incorrect password');
	}
	return user;
}

module.exports = mongoose.model("User", userSchema);