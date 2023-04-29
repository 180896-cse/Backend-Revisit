// Ink this file we gone desgine the schema for contacts
import mongooes from "mongoose";


const usersSchema = new mongooes.Schema({
    username:{
        type: String,
        required:[true,"Please provide the username"]
    },
    password:{
        type:String,
        required:[true,"Please provide the password"]
    }
});
const user = mongooes.model("user", usersSchema);

export {user};