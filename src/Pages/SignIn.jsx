import axios from "axios";
import React, { useState } from "react";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () => {
    let userObj = { email, password };
    let url = "http://localhost:5500/user/signin"
    axios.post(url, userObj)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err, "There is an error")
    })

    console.log(userObj);
  };
  return (
    <>
      <h1>Sign In Page</h1>

      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
    </>
  );
};

export default SignIn;
