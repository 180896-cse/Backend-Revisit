import path from "path";
import mongoose from "mongoose";
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

//making connection with mongo DB or atlas
// const DB = "mongodb+srv://shantanu19nagarro:Shan1234@logindb.lm4a4fh.mongodb.net/?retryWrites=true&w=majority"

const DB:string = "mongodb+srv://shantanu19nagarro:Shan1234@logindb.lm4a4fh.mongodb.net/?retryWrites=true&w=majority";

const DBconnect = ():void => {mongoose.connect(DB).then(()=>{
    console.log("connection with DB is sucesss!");
}).catch((err)=>{
    console.log("Error! with DB Connection", err);
})
};


export {DBconnect};
