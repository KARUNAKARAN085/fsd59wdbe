const mongoose = require('mongoose');
const app = require('./app');

const {MONGODB_URI} = require('./utils/config');

console.log('Connecting to MongoDB...');

mongoose.connect(MONGODB_URI)
.then(()=>{
  console.log("Connected to MongoDB")

  app.listen(3000, () =>{
    console.log('Server is running on port http://localhost:3000');
  })

})
.catch((err)=>console.log('error connecting to Mongodb',err))


//3. run the server
