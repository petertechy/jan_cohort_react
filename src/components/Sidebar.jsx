import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/dashboard/profile/:username">Profile</Link></li>
            <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar