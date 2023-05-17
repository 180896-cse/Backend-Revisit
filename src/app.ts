import { Application } from "express";
import express from "express";
import path from "path";
import mongoose from "mongoose";
import { DBconnect } from "./Model/dbConnect";

// just used old ecma for integrating swagger for better presentation




const app: Application = express();

//reading .env file
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

//assigning the port no with env file
const port: number | string = process.env.PORT || 3003;

//middleware for parsing the data recived from server because without this we can't show the data to client
app.use(express.json());

// middleware for making View folder static public for acessing the css and js files
app.use(express.static(path.join(__dirname, "../public/assests/css")));
app.use(express.static(path.join(__dirname, "../public/assests/js")));


//middleware created an route for acessing the html page.
app.use("/", require(path.join(__dirname, "./Routes/route")));

// setting up the view engine "hbs"
app.set("view engine", "hbs");

//started listening server
try {
  app.listen(port, (): void => {
    console.log(`server listing over: http://localhost:${port}`);
  });
} catch (err) {
  console.log(`err! occured : ${err}`);
}




DBconnect();


