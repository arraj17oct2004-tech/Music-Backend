const ImageKit = require('@imagekit/nodejs')

const imagekit = new ImageKit({
   privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})


const uploadFile_function = async(fileName,fileBuffer)=>{

   try {

      if(!req.file){
         return res.status(400).json({
            message : "Music file is required"
         })
      }
      

      const response = await imagekit.files.upload({
      file : fileBuffer.toString('base64'),
      fileName : fileName,
      folder : "/spotifyBackend"
      })


      // console.log(response) 
      /*
      response =  { 
                     fileId: '6a0f1d515c7cd75eb8aeea8c',
                     name: 'MusicName__-_1779375434477_-MsKEaBdL',
                     size: 446797,
                     versionInfo: { id: '6a0f1d515c7cd75eb8aeea8c', name: 'Version 1' },
                     filePath: '/spotifyBackend/MusicName__-_1779375434477_-MsKEaBdL',
                     url: 'https://ik.imagekit.io/3sfallydb/spotifyBackend/MusicName__-_1779375434477_-MsKEaBdL',
                     audioCodec: 'mp3',
                     fileType: 'non-image',
                     AITags: null,
                     description: null
                  }

      */
      

      return response   
   } 
   catch (error) {
      console.log('imagekit.service.js error :- ',error)   
   }
}



module.exports = uploadFile_function

