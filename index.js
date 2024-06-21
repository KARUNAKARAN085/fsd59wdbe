//1. import express module
const exxpress = require('express');

// 2. Create an Express app
const app = exxpress();

//4. create a route
app.get('/', (request, response) => {
    response.send('Hello Node.js');
})

//3. run the server
app.listen(3000, () =>{
    console.log('Server is running on port http://localhost:3000');
})