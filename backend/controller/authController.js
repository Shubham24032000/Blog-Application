const validator = require('validator');
const adminModel = require('../models/adminModel');
const bcrpty = require('bcrypt');
const jwt = require('jsonwebtoken');
//const formidable = require('formidable');
const userModel = require('../models/userModel');
const nodemailer = require('nodemailer');
const fs = require('fs');

module.exports.admin_login = async (req, res) => {
    const { email, password } = req.body;
    const error = {

    }
    if (email && !validator.isEmail(email)) {
        error.email = "please provide your valid email"
    }
    if (!email) {
        error.email = "please provide your email"
    }
    if (!password) {
        error.password = "Please provide your  password"
    }

    if (Object.keys(error).length > 0) {
        return res.status(400).json({ errorMessage: error })
    } else {
        try {
            const getAdmin = await adminModel.findOne({ email }).select('+password');
            if (getAdmin) {
                const matchPassword = await bcrpty.compare(password, getAdmin.password);
                if (matchPassword) {
                    const token = jwt.sign({
                        id: getAdmin._id,
                        name: getAdmin.adminName,
                        role: getAdmin.role,
                        image: getAdmin.image
                    }, process.env.SECRET, { expiresIn: '7d' });


                    return res.status(200).cookie('blog_token', token, { expires: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000), httpOnly: true }).json({
                        successMessage: 'login successful',
                        token
                    })
                } else {
                    return res.status(400).json({ errorMessage: { error: "Password does not match" } });
                }
            } else {
                return res.status(400).json({ errorMessage: { error: "Email does not exists" } });
            }

        } catch (error) {
            return res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
        }
    }
}

module.exports.user_register = async (req, res) => {


    const { name, email, password } = req.body;
    const errorData = {};
    if (!name) {
        errorData.name = 'Please provide your name'
    }
    if (!email) {
        errorData.email = 'Please provide your email'
    }

    if (email && !validator.isEmail(email)) {
        errorData.email = 'Please provide your valid email'
    }

    if (!password) {
        errorData.password = 'Please provide your password'
    }

    if (Object.keys(errorData).length === 0) {
        try {
            const getUser = await userModel.findOne({ email });
            console.log(getUser);
             if(getUser){
                 return res.status(500).json({errorMessage : {error:"Your email is already used."}});
            } else {
                const otp = Math.floor(Math.random() * 100000 + 345678);
                
                const transporter = nodemailer.createTransport({
                    service:"gmail",
                    port:587,
                    auth: {
                        user : 'shubhamtiwarignu@gmail.com',
                        pass : 'qborwjhghejxpdaf'
                    }
                })

                const mailOption = {
                    from : 'shubhamtiwarignu@gmail.com',
                    to : email,
                    subject : 'Sending email mern blog',
                    html : `<div style={padding:"10px"}><h3>Thank you for registering with this application.<br/>
                    To complete your registration, please verify your email address by entering the following OTP code.<br/>
                    Your otp code ${otp} .<br/>
                    Once you have verified your email address, you will be able to log in to your account and enjoy all of our features.</h3></div>`
                }

                transporter.sendMail(mailOption,async(error)=>{
                    if(error){
                        return res.status(500).json({errorMessage : {error:"Somethings else please try again."}});
                    } else {
                        console.log("otp send success");
                        const verifyEmailToken = jwt.sign({
                            email,
                            name,
                            password : await bcrpty.hash(password,10),
                            otpCode : otp
                        },process.env.SECRET,{
                            expiresIn:process.env.TOKEN_EXP
                        })

                        const option = {
                            expires : new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
                        }
                        res.status(201).cookie('emailVerifyToken',verifyEmailToken,option).json({successMessage:"Check your email and submit otp."});
                 }
                 })
             }
        } catch (error) {
            return res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
        }
    } else {

        return res.status(400).json({ errorMessage: errorData });
    }
    //         }

    //     }

}

module.exports.verify_email = async(req,res) =>{
   const {otp} = req.body;
   const {emailVerifyToken} = req.cookies;
   if(!otp){
    res.status(404).json({errorMessage: { error: 'Please provide your otp' }})
   } else {
    const { name ,email ,password, otpCode } = await jwt.verify(emailVerifyToken,process.env.SECRET);
        try {
            if(parseInt(otp) !== otpCode){
                res.status(404).json({errorMessage:{ error: 'Please provide your valid otp' }})
            } else{
                const createUser = await userModel.create({
                    userName:name,
                    email,
                    loginMethod : 'manually',
                    password,
                })
                const token = jwt.sign({
                    id:createUser._id,
                    email:createUser.email,
                    name:createUser.userName,
                    role:createUser.role,
                    loginMethod:createUser.loginMethod,
                    accessStatus:createUser.accessStatus,
                    createdAt:createUser.createdAt
                },process.env.SECRET,{
                    expiresIn:process.env.TOKEN_EXP
                })

                const option = {
                    expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                }

                res.clearCookie('emailVerifyToken')
                res.status(201).cookie('blog_token',token,option).json({
                    successMessage : "Your register successful",
                    token
                })
            }
        } catch (error) {
            return res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
        }
   }
}

module.exports.user_login = async(req,res) =>{

    const { email, password } = req.body;
    const error = {};
    if (email && !validator.isEmail(email)) {
        error.email = "please provide your valid email"
    }
    if (!email) {
        error.email = "please provide your email"
    }
    if (!password) {
        error.password = "Please provide your  password"
    }

    if (Object.keys(error).length > 0) {
        return res.status(400).json({ errorMessage: error })
    } else {
        try {
            const getUser = await userModel.findOne({ email }).select('+password');
           
            if (getUser) {
                const matchPassword = await bcrpty.compare(password, getUser.password);
                if (matchPassword) {
                    const token = jwt.sign({
                        id:getUser._id,
                        email:getUser.email,
                        name:getUser.userName,
                        role:getUser.role,
                        loginMethod:getUser.loginMethod,
                        accessStatus:getUser.accessStatus,
                        createdAt:getUser.createdAt
                    },process.env.SECRET,{
                        expiresIn:process.env.TOKEN_EXP
                    })
    
                    const option = {
                        expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                    }
                    res.status(201).cookie('blog_token',token,option).json({
                        successMessage : "Your login successful",
                        token
                    })
                } else {
                    return res.status(400).json({ errorMessage: { error: "Password does not match" } });
                }
            } else {
                return res.status(400).json({ errorMessage: { error: "Email does not exists" } });
            }

        } catch (error) {
            return res.status(500).json({ errorMessage: { error: "Internal Server Error" } });
        }
    }

}


module.exports.user_logout = async(req,res)=>{
    const option = {
        expires : new Date(Date.now())
    }
    res.cookie('blog_token',null,option)
    res.status(200).json({message:'success'});
    
   
}