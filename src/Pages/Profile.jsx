import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  let navigate = useNavigate()
  let token = localStorage.token
  const handleSignOut =()=>{
    localStorage.removeItem("token")
    console.log(localStorage)
    navigate('/signin')
  }

  useEffect(() => {
    getdashboard()
  }, [])
  
  let url = "http://localhost:5500/user/getdashboard"


  
  const getdashboard = () =>{
    axios.get(url,{
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type":  "application/json",
        "Accept": "application/json"
  
      }
    })
    .then((response)=>{
      console.log(response)
      if(!response.data.status){
        localStorage.removeItem(token)
        navigate('/signin')
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <>
        <h1>This is my Profile</h1>

        <button onClick={handleSignOut}>Sign Out</button>
    </>
  )
}

export default Profile