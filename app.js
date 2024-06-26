const express = require('express');

const userRouter = require('./routes/userRoutes')

const app = express();

app.use(express.json());

app.use('/users', userRouter)

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