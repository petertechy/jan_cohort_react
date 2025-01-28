import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate = useNavigate()
    const handleRegister = ()=>{
        // console.log("working")

        let isRegistered = true

        if(isRegistered){
            navigate('/')
        }else{
            alert("Register Properly")
        }
    }
  return (
    <div>
        <h1>Register Page</h1>
        <button onClick={handleRegister}>Click me to Register</button>
    </div>
  )
}

export default Register