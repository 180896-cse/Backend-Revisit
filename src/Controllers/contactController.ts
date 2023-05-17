import path from "path";
import { NextFunction, Request, Response } from 'express'

import { Get, Route } from "tsoa";

//importing the schema from data module
import user from "../Model/userModel";



//get request to get All contact

 

const getAlluser = async (req:Request, res:Response) => {
  const users:Object =  await user.find();
  res.status(200).json({ users });
   
};

//get request to get paticular contact
const getUser = async (req:Request, res:Response) => {
  const paticularUser = await user.findById(req.params.id);
  if (!paticularUser) {
    res.status(404).send(`No user found at this id !!`);
    // throw new error("no info found");
  } else {
    res.status(200).json({ paticularUser });
  }
};

//post reqeuest to post/create contact
const createUser = async (req:Request, res:Response) => {
  const { username, password } = req.body;
  const newUser = await user.create({
    username,
    password
  });
  res.status(201).json({ newUser });
  console.log("The new contact created");
};

//patch request to put contact
const updateUser = async (req:Request, res:Response) => {
    const id =  req.params.id;
    const updatedBody = req.body;
  const updatedUser = await user.findByIdAndUpdate(
    id,
    updatedBody
  );

  res.status(200).json({ updatedUser });
};




//delete request to delete contact
const deleteUser = async (req:Request, res:Response) => {
    const paticularUser = await user.findById(req.params.id);
    if (!paticularUser) {
      res.status(404).send(`No user found at this id !!`);
      // throw new error("no info found");
    }
  await user.findByIdAndDelete(paticularUser);
  res.status(200).json({ paticularUser });
};



//handle bar files of Login homepage/form
//if using templet engines "hbs" we have to use response.render();
const loginpage = async (req:Request, res:Response) => {
  await res.render(path.join(__dirname, "../views/pages/home.hbs"));
     
};



export {getAlluser,getUser,updateUser,createUser,deleteUser,loginpage};

