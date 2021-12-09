## Messages-App

Extremely simple API created for "DevOps with Docker" course (Sorry for my bad English).

Here I used containers in a development environment: one for the app running and another for the database. Also, I used two volumes: one for node_modules and another for the database. As I forgot how to use Mongoose, I followed [this](https://medium.com/codex/building-a-simple-crud-app-with-node-js-express-js-and-mongodb-6e96d13edae7) tutorial.

This app receives GET requests from "localhost:8000/messages" and returns a list of message objects (an id, the message and a timestamp). Also, you can get an individual message by including the id of that message (ex.:"localhost:8000/messages/123456").

You can save a new message with a POST request, the request body should be an object with a "text" property. You can delete messages with a DELETE request by including the id of an specific message in the URI.

#### Prerequisites for development:

Docker, Docker Compose, NodeJS and npm.

#### Executing the development environment:

1. Run "docker-compose up".

2. You can edit the source code and when changes are saved, nodemon restarts the app in the container.


