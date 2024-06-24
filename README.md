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