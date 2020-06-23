const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');


const user = require('./routes/userRoutes/userRoutes');


var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/user', user);

const swaggerOptions = {
  swaggerDefinition: {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Login API",
      "description": "Login API",
      "license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
      }
    },
    "paths": {
      "/user": {
        "get": {
          "tags": [
            "Get User API"
          ],
          "summary": "To get individual user  details by email of user",
          "responses": {
            "200": {
              "description": "OK"
            },
            "404": {
              "description": "Failed. Bad Request"
            }
          }
        }
      },
      "/user/createUserfirst": {
        "post": {
          "tags": [
            "Create User API"
          ],
          "summary": "To Create User using email and password and assign token to it.",
          "requestBody": {
            "description": "User Object",
            "required": true,
            "content": "application/json"
          },
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "required": true,
              "description": "User with new values",
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "404": {
              "description": "Failed. Bad Request"
            }
          }
        }
      },
      "/user/loginUser": {
        "post": {
          "tags": [
            "Login User API"
          ],
          "summary": "To Login User using email and password",
          "requestBody": {
            "description": "User Object",
            "required": true,
            "content": "application/json"
          },
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "required": true,
              "description": "Login User Data",
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "404": {
              "description": "Failed. Bad Request"
            }
          }
        }
      }
    }
  },
  apis: ["./routes/userRoutes/userRoutes/*.js"]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Infy Insurance Backend application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});