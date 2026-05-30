require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/database/db')


connectDB()


const PORT = process.env.PORT 

app.listen(PORT,()=>{
   console.log(`Server listening on port ${PORT}`);
})