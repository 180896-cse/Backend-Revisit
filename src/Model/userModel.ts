// Ink this file we gone desgine the schema for contacts
import mongoose, {Model, Schema, model,} from "mongoose";

//interface for schema
interface IContact {
    username: string,
    password:string
}


const usersSchema = new Schema<IContact>({
    username:{
        type: String,
        required:[true,"Please provide the username"]
    },
    password:{
        type:String,
        required:[true,"Please provide the password"]
    }
});
// 3. Create a Model.
const user = mongoose.model<IContact>("user",usersSchema);

export default user;