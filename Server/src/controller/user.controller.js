const userModels = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000, //7days
    httpOnly: true,
};

const registerUserController = async (req, res) => {
    try {
        const { username, email, age, password, avatar } = req.body;

        //required check
        if (!username || !email || !password) {
            return res.status(500).send({
                success: false,
                message: "Plz provide All fields",
            });
        }

        //checking for the existing user
        const existingUser = await userModels.findOne({ email });

        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: "Email Already Registered please login",
            });
        }

        //now hashing the password for the safety purpose -> using bcrypt.js
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //now everything is fine (CREATE A NEW USER)
        const newUser = await userModels.create({
            username,
            email,
            age,
            password: hashedPassword,
            avatar,
        });

        //now we have to save new user formed
        await newUser.save();

        res.status(201).send({
            success: true,
            message: "User Created Successfully",
            user: newUser,
        });
    } catch (error) {
        console.log(error);
        res.status(300).send({
            success: false,
            message: "Error while creating User",
        });
    }
};

const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please provide Email or Password",
            });
        }

        //Check for the User in the database
        const user = await userModels.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User Not Found",
            });
        }

        //check user password | compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "Invalid Credentials",
            });
        }

        user.password = undefined;

        //Generate jwt token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "2d" } // Token expiry
        );

        res.cookie("token", token, cookieOptions);

        res.status(200).send({
            success: true,
            message: "Login Successfully",
            user: user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Login API Controller",
            error,
        });
    }
};

module.exports = { registerUserController, loginUserController };
