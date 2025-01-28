import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    console.log(useParams())

    let {username} = useParams()
  return (
    <div>
        <h1>Welcome to your Profile: {username}</h1>
    </div>
  )
}

export default UserProfile