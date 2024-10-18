<h1 align="center"> Twitter-Backend </h1>

#### This is a REST API based Twitter Backend.

## 🚀 Installation & Setup

Follow these steps to get the project up and running on your machine:

### 📋 Steps

1. **Clone the repository:**

   Clone the project repository to your local machine using git.

   ```bash
   git clone https://github.com/raj17ce/Twitter-Backend.git
   cd Twitter-Backend
   ```

2. **Install dependencies:**

   Run the following command to install the required dependencies.

   ```bash
   npm install
   ```

3. **Create `.env` file:**

   - Duplicate `.env.example` and rename it to `.env`.
   - Update the `DatabaseURI` variable with the appropriate MongoDB URI. Make sure to append `/dbname` at the end of the URI.
   - Update the `PORT` number to suit your requirements.
   - Set the `JWTSecretKey` to any secure string of your choice, but ensure it remains confidential and is not exposed.

Note: You can run the project either locally or with Docker Compose, depending on your preference. Below is a guide for both methods, choose whichever suits your needs.
  
### 💻 Run Locally

Make sure you have the following installed on your machine:

- `Node.js` (v12 or above)
- `MongoDB Community Server` or `Atlas` (Not needed if you run MongoDB on a Docker container) 
- `Docker` (for running MongoDB in a container, optional)

4. **Run a MongoDB instance:**

   You can run MongoDB in one of the following ways:

   1. **Run MongoDB Community Server locally:**
      Make sure MongoDB is installed and running on your machine.

   2. **Run MongoDB on MongoDB Atlas (Cloud):**
      Set up a MongoDB Atlas instance and copy the connection URI.

   3. **Run MongoDB in a Docker Container:**
      Use the following command to run MongoDB in a Docker container:

      ```bash
      docker run --name mongodb-server -p 27017:27017 -d mongodb/mongodb-community-server:latest
      ```

5. **Start the server:**

   You can run the server in development mode or production mode:

   - For development:

     ```bash
     npm run dev
     ```

   - For production:

     ```bash
     npm run start
     ```

### 🧊 Run using Docker-Compose

Make sure you have the following installed on your machine:

- `Docker` (run `docker --version` to check)
- `Docker-Compose` (run `docker-compose --version` to check)

4. **Start the Server**
   
   Run the following command to run this multi container backend server using docker-compose.
   ```bash
   docker-compose up
   ```

## 🌱 Health Check
   To ensure that the application and the MongoDB database are running smoothly, you can perform a health check by sending a GET request to the following endpoint:

   ```bash
   GET http://localhost:8000/api/v1/health
   ````

   Below is a sample success response. If you get this response, it means that the Server and Database is UP and Running.
   ```json
   {
      "success": true,
      "message": "Server and Database is Up and Running.",
      "data": {
         "status": "UP",
         "services": {
               "database": "connected"
         }
      },
      "err": {}
   }
   ```
## ✨ Features

- User can Signup/Login.

- User password is stored in encrypted form.

- User can craete a Tweet.

- Tweet can also include hashtags.

- User can Like/UnLike a Tweet.

- User can Comment on a Tweet as well as on a Comment.

- User can Delete Tweets and Comments.

## 🛠️ TechStack

- [NodeJS](https://nodejs.org/en) Runtime for running JavaScript.

- [ExpressJS](https://expressjs.com/) NodeJS based web application framework.

- [MongoDB](https://www.mongodb.com/docs/) NoSQL, Document based Database.

- [Mongoose](https://mongoosejs.com/) ODM for MongoDB.

- [PassportJS](https://www.passportjs.org/) NodeJS library for JWT based user authentication.

- [bcrypt](https://www.npmjs.com/package/bcrypt) NodeJS library for storing user password in encrypted form.
