const posts = [
    {
        "name": "Todd Marks",
        "username": "Kansas",
        "email": "Bryana.Legros13@example.net",
        "address": "Biloxi",
        "phone": "855-689-2696 x274",
        "completed": true,
        "id": "1"
      },
      {
        "name": "Meredith Brown",
        "username": "systemic",
        "email": "Jody67@example.com",
        "address": "North Bethesda",
        "phone": "(450) 476-3759 x3576",
        "completed": true,
        "id": "2"
      },
      {
        "name": "Doug Konopelski",
        "username": "Cambridgeshire",
        "email": "Adrienne.Ruecker@example.org",
        "address": "Aliso Viejo",
        "phone": "1-852-313-2145 x6281",
        "completed": true,
        "id": "3"
      },
      {
        "name": "Ms. Ginger Bins",
        "username": "Bicycle",
        "email": "Krista.Morar83@example.org",
        "address": "Farmington",
        "phone": "624-428-9096 x4436",
        "completed": true,
        "id": "4"
      },
      {
        "name": "Sylvia Murphy IV",
        "username": "relationships",
        "email": "Edwardo_Kessler@example.net",
        "address": "Grand Forks",
        "phone": "1-204-324-6999 x70563",
        "completed": true,
        "id": "5"
      }
]
//1. import express module
const express = require('express');

// 2. Create an Express app
const app = express();

//5. middleware
app.use(express.json());

//4. create a route
//response.send-> to send a string
app.get('/', (request, response) => {
    response.json(posts);
})

app.post('/posts',(request,response) => {
    response.json({
        ...request.body,
        id: posts.length + 1,
    });
})

//3. run the server
app.listen(3000, () =>{
    console.log('Server is running on port http://localhost:3000');
})