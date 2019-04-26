// it is always a good idea to set up environment variables to protect your tokens, passwords, db connection strings, etc. It is also great for having one reference to a variable that may change.
require("dotenv").config();



var keys = require("./keys.js");
var spotify = require("spotify");

console.log("load");