import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <div className='container border vh-100'>
        <div className='row justify-content-center'>

        <div className='col'>
            <p className={style.text}>Hello, we’re SQI College of ICT</p>
        </div>
        <div className='col'>B</div>
        <div className='col'>C</div>
        <div className='col'>D</div>
        <div className='col'>E</div>
        
        </div>
    </div>
  )
}

export default Footer