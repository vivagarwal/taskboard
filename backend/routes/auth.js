const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/User.js");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

//Register
router.post("/register", async (req, res) => {
    try {
        //get all the data from body
        const { fullname, email, password } = req.body;

        // check that all the data should exists
        if (!(fullname && email && password)) {
            return res.status(400).json({message :"Please enter all the details"});
        }

        if (!validateEmail(email)) {
            return res.status(400).json({message:"Please enter a valid email address"});
        }

        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json({message :"User already exists!"});
        }

        // encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // save the user in DB
        const user = await User.create({
            fullname,
            email,
            password: hashedPassword,
        });

        // generate a token for user and send it
        const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });

        user.token = token;
        user.password = undefined;
        res
            .status(200)
            .json({ message: "You have successfully registered!", user,token });

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});

//Login
router.post("/login", async (req, res) => {
    try {
        //get all the user data
        const { email, password } = req.body;

        // check that all the data should exists
        if (!(email && password)) {
            return res.status(400).json({message :"Please enter all the information"});
        }

        //find the user in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({message:"User not found!"});
        }

        //match the password
        const enteredPassword = await bcrypt.compare(password, user.password);
        if (!enteredPassword) {
            return res.status(401).json({message:"Password is incorrect"});
        }

        const token = jwt.sign({ id: user._id, email: user.email}, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });
        user.token = token;
        user.password = undefined;

        //store cookies
        const options = {
            expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            httpOnly: true, //only manipulate by server not by client/user
        };

        //send the token
        res.status(200).cookie("token", token, options).json({
            message: "You have successfully logged in!",
            success: true,
            token,
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
