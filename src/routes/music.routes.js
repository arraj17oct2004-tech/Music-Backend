const express = require('express')
const musicController = require('../controllers/music.controller')
const authMiddleware = require('../middleware/authMiddleware')

const multer = require('multer')

const upload = multer({storage : multer.memoryStorage()})


const router = express.Router()

// POST , '/api/music/create-music'  => To create music , only artist can create music
router.post('/create-music',authMiddleware.authArtist,upload.single('music') ,musicController.createMusic)


// POST , '/api/music/create-album' => Create Album for every artist
router.post('/create-album',authMiddleware.authArtist,musicController.createAlbum)



// GET , /api/music/getAllMusic  => getallMusics from the system
router.get('/getallmusics',authMiddleware.authUser,musicController.getAllmusic)


// GET , /api/music/getallalbums  => getallAlbums from the system
router.get('/getallalbums',authMiddleware.authUser,musicController.getAllalbums)






module.exports = router
