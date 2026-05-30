const jwt = require('jsonwebtoken')
const musicModel = require('../models/music.models')
const userModel = require('../models/user.models')
const albumModel = require('../models/album.models')

const uploadFile_function = require('../services/imagekit.service')


const createMusic = async (req,res)=>{

      // if decoded.role == "artist" , user-artist can create a music......
      // can access decode by req.jwt_decoded
      
      // console.log('REQUEST-FILE :- ',req.file)
      
      const response = await uploadFile_function(`MusicName :- ${Date.now()}`,req.file.buffer)
      
      const musicObj = await musicModel.create({
            uri : response.url,
            title : req.body.title,
            artist : req.jwt_decoded.id
      })     
      
      res.status(201).json({
         message : "Music-File created Successfully",
         Music_obj : musicObj
      })
   
}


const createAlbum = async(req,res)=>{

  
      // if decoded.role == artist then artist can create album
      // // can access decode by req.jwt_decoded

      const {title , songs } = req.body

      const album = await albumModel.create({
         title : title,
         songs : songs,
         artist : req.jwt_decoded.id
      })

      return res.status(201).json({
         message : 'Album-created Successfully..',
         ALBUM : album
      })

}

const getAllmusic = async(req,res)=>{
   try {
      const allSongs = await musicModel.find().select('uri title artist -_id').populate('artist','username email -_id')

      return res.status(200).json({
         message : 'All Musics Fetched Successfully....',
         AllSongs : allSongs
      })

   } 
   catch (error) {
      console.log('Music-Controller => getAllmusic , error :-  ',error)

      return res.status(500).json({
         message : 'Internal Server Error'
      })
   }
}


const getAllalbums = async(req,res)=>{

   // const allAlbums = await albumModel
   //       .find()
   //       .select('title artist songs')
   //       .populate('artist','username email -_id')
   //       .populate('songs','title uri artist -_id')
   
   const allAlbums = await albumModel
      .find()
      .select('title artist songs')
      .populate('artist', 'username email -_id')
      .populate({
         path: 'songs',
         select: 'title uri artist -_id',
         populate: {
            path: 'artist',
            select: 'username -_id'
         }
      });



   return res.status(200).json({
      message : 'All Albums Fetched SuccessFully..',
      allAlbums : allAlbums
   })

}


module.exports = {createMusic,createAlbum,getAllmusic,getAllalbums}