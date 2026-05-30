const jwt = require('jsonwebtoken')

const authArtist = async (req,res,next)=>{
   const token = req.cookies.token

   if(!token)
      return res.status(403).json({message : "Unauthorized ! Token_NULL"})

   try{ 
      const decoded = jwt.verify(token,process.env.JWT_SECRET)
      // decoded = { id: 'user-ka-id', role: 'user-ka-role', iat }

      if(decoded.role !== 'artist')
         return res.status(403).json({message : 'Unauthorized ! User is not an artist'})

      
      // if decoded.role == 'artist' then controller functions will be called
      req.jwt_decoded = decoded

      next()


   }
   catch(err){
      // JWT-Verification Err
      console.log('authMiddleware_authArtist error =>',err)

      return res.status(403).json({message : 'Invalid-Token'})

   }

}


const authUser = async (req,res,next)=>{
   const token = req.cookies.token

   if(!token)
      return res.status(403).json({message : "Unauthorized ! Token_NULL"})

   try {

      const decoded = jwt.verify(token,process.env.JWT_SECRET)

      if(decoded.role !== 'artist' && decoded.role !== 'user')
          return res.status(403).json({message : 'Unauthorized !'})

      
         // if decoded.role == artist or user then he move forward to controllers
         req.jwt_decoded = decoded
         
      next()   

   } 
   catch (error) {
      console.log('authMiddleware => authUser , error :- ',error)

      return res.status(403).json({
         message : 'Unauthorized..'
      })
   }   

}

module.exports = {authArtist,authUser}