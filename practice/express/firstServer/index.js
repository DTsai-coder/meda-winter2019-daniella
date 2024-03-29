// Use the Express package.
// Express is used to communicate with JQuery 

const express = require("express");

// Run the Express Server
const app = express();

// Feed Express server to the HTTP package
// HTTP Request is a signal sent to database
const http = require("http").Server(app); // .Server is a class and (app) is an argument 

// Normal webpage port is Port:80
// Development(server) webpage port is Port: 8080

const port = 8080;

// Tell HTTP to which port to listen to.
http.listen(port); // .listen is a method that tells http what port to listen to.

console.log("The express server is running on port " + port + "!");

// Express Routes
app.use("/client", express.static("./web_files/")); // http://localhost:8080/client -> Get sent to -> web_file folder
// app.use(/profile", express.static("user/"));

// test in the browser, type: http://localhost:8080/client <-- client because in the app.use("/client"), 8080 because the port is 8080 in this file. Check line 16 for reference. 


app.use("/my_project", express.static("../../../.././meda-fall2019-daniella/projects/hobby"));