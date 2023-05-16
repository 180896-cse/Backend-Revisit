import express, { Application, Router } from "express";
import path from "path";

import {getAlluser,getUser,createUser,updateUser,deleteUser,loginpage} from "../Controllers/contactController"

const routers:Router = express.Router();


//defining routes
routers.route("/").get(loginpage);
 
// I can use multiple method if they can have same url and params
routers.route("/api/user").get(getAlluser);
routers.route("/api/user").post(createUser);


// I can use multiple method if they can have same url and params
routers.route("/api/user/:id").get(getUser);
routers.route("/api/user/:id").patch(updateUser);
routers.route("/api/user/:id").delete(deleteUser);







//exporting the routers
module.exports = routers;