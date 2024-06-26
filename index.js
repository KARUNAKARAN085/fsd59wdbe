const mongoose = require('mongoose');
const app = require('./app');

const {MONGODB_URI, PORT} = require('./utils/config');

console.log('Connecting to MongoDB...');

mongoose.connect(MONGODB_URI)
.then(()=>{
  console.log("Connected to MongoDB")

  app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
  })

})
.catch((err)=>console.log('error connecting to Mongodb',err))

