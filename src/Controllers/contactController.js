const path = require("path");
const DB = require ("../app");


//importing the schema from data module
const user = require ("../Model/userModel");


//get request to get All contact
const getAlluser = async (req, res) => {
  const users = await user.find();
  res.status(200).json({ users });
   
};

//get request to get paticular contact
const getUser = async (req, res) => {
  const paticularUser = await user.findById(req.params.id);
  if (!paticularUser) {
    res.status(404).send(`No user found at this id !!`);
    // throw new error("no info found");
  } else {
    res.status(200).json({ paticularUser });
  }
};

//post reqeuest to post/create contact
const createUser = async (req, res) => {
  const { username, password } = req.body;
  const newUser = await user.create({
    username,
    password
  });
  res.status(201).json({ newUser });
  console.log("The new contact created");
};

//patch request to put contact
const updateUser = async (req, res) => {
    const id =  req.params.id;
    const updatedBody = req.body;
  const updatedUser = await user.findByIdAndUpdate(
    id,
    updatedBody
  );

  res.status(200).json({ updatedUser });
};


//delete request to delete contact
const deleteUser = async (req, res) => {
    const paticularUser = await user.findById(req.params.id);
    if (!paticularUser) {
      res.status(404).send(`No user found at this id !!`);
      // throw new error("no info found");
    }
  await user.deleteOne(paticularUser);
  res.status(200).json({ paticularUser });
};



//handle bar files of Login homepage/form
//if using templet engines "hbs" we have to use response.render();
const loginpage = async (req, res) => {
  await res.render(path.join(__dirname, "../views/Htmlfiles/home.hbs"));

    //  const isUser = await user.find({ "id": "4" })
    //  if(isUser==""){
    //     res.send("no element found with this id!!");
    //  }else{
    //     res.status(200).json(isUser);
    //     isUser.forEach((user)=>{
    //         if(user.name == "shantanu"){
    //    console.log(user.name);
    // }
    //    });
    // }
     
};

module.exports = {
    getAlluser,
  getUser,
  updateUser,
  createUser,
  deleteUser,
  loginpage,
};
