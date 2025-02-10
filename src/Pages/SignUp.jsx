import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState(0);
  const [password, setpassword] = useState("");


  const handleRegister = ()=>{
    let userObject = {firstName, lastName, email, age, password}
    // console.log(userObject)
let url = "http://localhost:5500/user/register"
    axios.post(url, userObject)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return (
    <>
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Enter your First Name"
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Last Name"
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Age"
        onChange={(e) => setage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register User</button>
    </>
  );
};

export default SignUp;
