// Business Logic for authentication APIs......

const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerUser = async (req,res)=>{

   const {username,email,password,role} = req.body

   if( !username || !email || !password )
   {
      return res.status(400).json({
         message : "Please enter all required details...."
      })
   } 

   if(password.length < 6){
      return res.status(400).json({
         message : "Password must be at least 6 characters"
      })
   }

   const userExists = await userModel.findOne({
         $or: [{ email }, { username }]
      })

      if(userExists)
      {
         if(userExists.email === email)
         { return res.status(409).json({message : "User already exists with entered email..."})  }
      
         if(userExists.username === username)
         { return res.status(409).json({message : "User already exists with entered username..."})  }
      }   

   
   try {

      const hashedPassword = await bcrypt.hash(password,10)
      
      const userObj = await userModel.create({
         username,
         email,
         password : hashedPassword,
         role
      })
      
      
      // Token-Generation
      const token = jwt.sign(
         {  id : userObj._id,
            role : userObj.role
         },process.env.JWT_SECRET)
      
      res.cookie('token', token)
      
      
      return res.status(200).json({
         message : "User Registered Successfully...",
         UserDetails : {
            username : userObj.username,
            email : userObj.email,
            role : userObj.role
         } 
      })


   }
   catch (error) {

      console.log("Auth.Controller.js => registerUser error :-  ",error)  
      
      return res.status(500).json({
         message: 'Internal Server Error'
      })
   }


}


const loginUser = async (req,res)=>{

   try {
      const {email , username , password } = req.body

      if((!email && !username) || !password)
      {
         return res.status(400).json({
            message : "Empty Credentials ..."
         })
      }


      const userObj = await userModel.findOne({
         $or : [{email} , {username}]
      })

      if(userObj == null)
      {   
         return res.status(404).json({
            message : "No user exists with entered userName / email"
         })
      }   

      const checkPassword = await bcrypt.compare( password , userObj.password )

      if(checkPassword == false)
      {
         return res.status(401).json({
            message : "Incorrect Password"
         })
      }   

      
      // in case of :- CORRECT-PASSWORD 

      const token = jwt.sign({
         id : userObj._id,
         role : userObj.role 
      },process.env.JWT_SECRET)

      res.cookie('token',token)


      res.status(200).json({
            message : "Login SuccessFull",
            User_details : {
               username : userObj.username,
               email : userObj.email,
               role : userObj.role
            }
      })
      

   } 
   catch (error) {
      console.log("Auth.Controller.js => loginUser error :-  ",error)  
      
      return res.status(500).json({
         message: 'Internal Server Error'
      })
   }

}

const logoutUser = async (req, res) => {

   res.clearCookie('token');

   return res.status(200).json({
      message: "Logged out successfully"
   });

}



module.exports = {registerUser,loginUser,logoutUser}