
if (typeof document !== 'undefined') {
 // Locators for login form
let employeUname = document.getElementById("username");
let employePass = document.getElementById("password");
let lgnBtn = document.getElementById("sbmtBtn");
let rgstrBtn = document.getElementById("register-link");


//Login part code
lgnBtn.addEventListener("click", () => {
  console.log("LogIn Button Clicked!");
  if (employePass.value.length == 0 || employeUname.value.length == 0) {
    alert("Username/Password field cannot be blank!");
  } else {
    if (localStorage.getItem(employeUname.value) != null) {
      console.log("Username present in LocalStorage!");
      if (employePass.value == localStorage.getItem(employeUname.value)) {
        window.location.replace(
          "http://127.0.0.1:5500/Assignment/Assignment-3-JS/"
        );
      } else {
        alert("Invalid Password!");
      }
    } else {
      alert("Please Register Username First!");
    }
  }
});



//Registration Part Code
rgstrBtn.addEventListener("click", () => {
  console.log("Register Button Clicked!");
  if (employePass.value.length == 0 || employeUname.value.length == 0) {
    alert("Username/Password field cannot be blank!");
  } else {
    if (localStorage.getItem(employeUname.value) != null) {
      alert("UserName Already Registered");
    } else {

    //   window.localStorage.setItem(employeUname.value, employePass.value);
    }
  }
});

module.exports = {employeUname,employePass,lgnBtn,rgstrBtn};
}
