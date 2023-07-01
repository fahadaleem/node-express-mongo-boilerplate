# Node Express Mongo Boilerplate

This repository contains a boilerplate code for a Node.js application with MongoDB integration and pre-implemented authentication APIs. It provides a basic folder structure and configuration files to get you started quickly with your Node.js project.

## Folder Structure

The repository follows the following folder structure:

- **configs**: Contains configuration files for the application. The `database.js` file holds the configuration settings for connecting to the MongoDB database.

- **controllers**: Contains the controller files that handle the logic for each route. You can add additional controller files as per your application requirements.

- **middlewares**: Contains the middleware files that can be used to add custom logic before or after processing a request. Middleware functions can be added to the routes to handle authentication, error handling, logging, etc.

- **models**: Contains the data models that define the structure and behavior of the application's data. You can create separate model files for different data entities or resources.

- **routes**: Contains the route files that define the API endpoints for your application. Each route file can be associated with a specific resource or functionality. You can add, modify, or delete routes as per your application requirements.

- **utils**: Contains utility files or helper functions that can be used across different parts of the application.

- **index.js**: The entry point of the application. This file sets up the Express server, connects to the database, and registers the routes and middleware.

- **package.json**: The package configuration file that lists the project dependencies and defines the scripts to start, test, and build the application.

- **.env**: The environment file where you can store sensitive or environment-specific configuration variables. Make sure not to commit this file to version control for security reasons.

## Getting Started

To use this boilerplate code, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/fahadaleem/node-express-mongo-boilerplate.git
   ```

2. Install the dependencies:

   ```
   cd node-express-mongo-boilerplate
   npm install
   ```

3. Set up your MongoDB database and update the `configs/database.js` file with the appropriate connection settings.

4. Customize the authentication APIs or add your own routes, controllers, models, and middleware as per your application requirements.

5. Start the server:

   ```
   npm start
   ```

   This will start the server at `http://localhost:5000`.

6. Test the authentication APIs or your custom routes using a tool like Postman or by making HTTP requests from your frontend application.

## Contributing

If you would like to contribute to this project, feel free to submit a pull request with your changes or open an issue for any bug reports or feature requests.
