const express = require("express");
const path = require("path");
const routers = express.Router();
const getAlluser = require("../Controllers/contactController").getAlluser;
const getUser = require("../Controllers/contactController").getUser;
const createUser = require("../Controllers/contactController").createUser;
const updateUser = require("../Controllers/contactController").updateUser;
const deleteUser = require("../Controllers/contactController").deleteUser;
const loginpage = require("../Controllers/contactController").loginpage;

//defining routes
routers.route("/").get(loginpage);
 
// I can use multiple method if they can have same url and params
routers.route("/api/user").get(getAlluser).post(createUser);


// I can use multiple method if they can have same url and params
routers.route("/api/user/:id").get(getUser).patch(updateUser).delete(deleteUser);







//exporting the routers
module.exports = routers;