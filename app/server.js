const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


const user = require('./routes/userRoutes/userRoutes');
 

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/user',user);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Infy Insurance Backend application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});