const mongoose = require('mongoose')

const connectDB = async ()=>{
   try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log('DB-connection successfull.....');
   } catch (error) {
      console.log('DB-Connection Failed...., ERROR :- ');
      console.log(error);

      process.exit(1)
   }
}

module.exports = connectDB