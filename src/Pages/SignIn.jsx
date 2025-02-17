import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("")
  let navigate =useNavigate()
  const handleLogin = () => {
    let userObj = { email, password };
    let url = "http://localhost:5500/user/signin"
    axios.post(url, userObj)
    .then((response)=>{
        console.log(response)
        if(response.data.status == true){
          localStorage.token = response.data.token
          // localStorage.setItem(response.data.token)
          navigate('/profile')
        }else{
          setmessage(response.data.message)
        }
    })
    .catch((err)=>{
        console.log(err, "There is an error")
    })

    console.log(userObj);
  };
  return (
    <>
      <h1>Sign In Page</h1>
      {message ? <h1>{message}</h1> : ""}
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
