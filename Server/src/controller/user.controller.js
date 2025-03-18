const userModels = require("../models/user.models");
const bcrypt = require("bcryptjs");

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
            password : hashedPassword ,
            avatar,
        });
    
        //now we have to save new user formed
        await newUser.save() ;
    
        res.status(201).send({
            success : true , 
            message : "User Created Successfully",
            user : newUser
        })
    } catch (error) {
        console.log(error) ;
        res.status(300).send({
            success : false , 
            message : "Error while creating User"
        })
    }
};

module.exports = { registerUserController };
