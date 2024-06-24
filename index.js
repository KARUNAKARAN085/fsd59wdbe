
//1. import express module
const express = require('express');
const mongoose = require('mongoose');

// 2. Create an Express app
const app = express();

//5. middleware
app.use(express.json());

console.log('Connecting to MongoDB...');

mongoose.connect(`mongodb+srv://karunakaranrk2001:Harikaran01@cluster0.pfjzhuk.mongodb.net/`)
.then(()=>{
  console.log("Connected to MongoDB")

  app.listen(3000, () =>{
    console.log('Server is running on port http://localhost:3000');
  })

})
.catch((err)=>console.log('error connecting to Mongodb',err))

//4. create a route
//response.send-> to send a string
// app.get('/posts', (request, response) => {
//     response.json(posts);
// })

// app.post('/posts',(request,response) => {
//     posts.push(
//         {
//             ...request.body,
//             id: posts.length + 1,
//         }
//     );
//     response.json(
//         {
//             ...request.body,
//             id: posts.length + 1,
//         }
//     );
// })

// app.put('/posts/:id', (request, response) => {
//     const id = request.params.id;
//     let UpdatedPost = request.body;
//     const toUpdatePost = posts.find(post => post.id == id);

//     UpdatedPost={
//         ...toUpdatePost,
//         ...UpdatedPost
//     }

//     posts = posts.map(post => post.id == id ? UpdatedPost : post);

//     response.json(UpdatedPost);
// })

// app.delete('/posts/:id', (request, response) => {

//   const postDelete = posts.find(post => post.id == request.params.id);

//   if(!postDelete){
//     response.send({message: 'Post not found'});
//   }

//   const id = request.params.id;
//   posts = posts.filter(post => post.id != id);
//   response.json({ 
//     message: `Post with id ${id} deleted successfully`
//   });
// })

//3. run the server
