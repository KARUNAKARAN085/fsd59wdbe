const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();

app.use(express.json());

app.get('/users', async (request, response) => {
    try{
        const users = await User.find({},{_id: 0, password: 0});
        response.status(200).json(users);
    } catch(error){
        response.status(500).json({message: error.message});
    }
})

module.exports = app;





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