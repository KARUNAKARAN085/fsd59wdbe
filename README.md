1. git init
2. create .gitignore,README.md
3. npm init
    -important-> index.js, repository
4. to execute -> node index.js
     (or)
   npm run start - paste "start": "node index.js" inside package.json>script>test ku keela
5. basic code
6. npm install nodemon --save-dev ->to auto save(don't need to stop)
7. npm run dev - paste "dev": "nodemon index.js" inside package.json>script>start ku keela
8. now to execute-> npm run dev


## steps to setup the application:
1. Create a new folder.
2. generate a package.json file by running `npm init -y` command.
3. Install express.js by running `npm install express mongoose` command.
4. Create a new entry point file named `index.js`.
5. In the index file:
   - Import express
   - create an express app.
   - define a basic root route for the app
   ```javascript
   app.get("/",(req,res) => {
    res.send("Welcome to my app");
   })
   ```
   - listen for incoming http request on the specific port
6. run the application by running `node index.js`

## Enable git version control
1. Initialize a new git repository by running `git init` command.
2. Create a `.gitignore` file to ignore unnecessary files.
3. rename the branch to `main` by running `git branch -M main`.
4. Add all the files to the staging area by running `git add .` command.
5. Commit the changes by running `git commit -m "Initial commit"` command.
6. Create a new repository on GitHub and link it to the local repository by running `git remote add origin <repository-url>` command.
7. Push the changes to the remote repository by running `git push -u origin main` command.

## create readme
1. create a new file named `README.md`
2. add the project description, setup instructions, and any other relevant information in markdown format.

## Enable nodemon for automatic server restarts
1. Install nodemon by running `npm install nodemon --save-dev` command.
2. Add a start script in the `package.json` file: 
    ```json
      "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
        }
    ```
3. Run the application with nodemon by running `npm run dev` command.




## Application

Job Portal System

## Features

- [ ] User registration
- [ ] User login

- [ ] Admin Dashboard

  - [ ] Add a Company
  - [ ] Update a Company
  - [ ] Delete a Company
  - [ ] View all Companies
  - [ ] View a Company
  - [ ] Add a Job
  - [ ] Update a Job
  - [ ] Delete a Job
  - [ ] View all Jobs
  - [ ] View a Job
  - [ ] View all users
  - [ ] View a user
  - [ ] Update a user
  - [ ] Delete a user
  - [ ] View all applications

- [ ] User Dashboard
  - [ ] View all jobs
  - [ ] View a job
  - [ ] Apply for a job
  - [ ] View all applied jobs
  - [ ] View a applied job
  - [ ] View profile
  - [ ] Update profile
  - [ ] Delete profile
  - [ ] logout

## API Endpoints

- [ ] POST /api/v1/users/register : Register a user
- [ ] POST /api/v1/users/login : Login a user
- [ ] GET /api/v1/users : Get all users
- [ ] GET /api/v1/users/:id : Get a user
- [ ] PUT /api/v1/users/:id : Update a user
- [ ] DELETE /api/v1/users/:id : Delete a user
- [ ] GET /api/v1/users/profile : Get user profile
- [ ] PUT /api/v1/users/profile : Update user profile
- [ ] DELETE /api/v1/users/profile : Delete user profile
- [ ] GET /api/v1/companies : Get all companies
- [ ] GET /api/v1/companies/:id : Get a company
- [ ] POST /api/v1/companies : Add a company
- [ ] PUT /api/v1/companies/:id : Update a company
- [ ] DELETE /api/v1/companies/:id : Delete a company
- [ ] GET /api/v1/jobs : Get all jobs
- [ ] GET /api/v1/jobs/:id : Get a job
- [ ] POST /api/v1/jobs : Add a job
- [ ] PUT /api/v1/jobs/:id : Update a job
- [ ] DELETE /api/v1/jobs/:id : Delete a job
- [ ] GET /api/v1/applications : Get all applications
- [ ] GET /api/v1/applications/:id : Get an application
- [ ] POST /api/v1/applications : Add an application
- [ ] GET /api/users/logout : Logout a user