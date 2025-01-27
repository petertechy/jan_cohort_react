import React from 'react'
import Navbar from './Navbar'

const ButtonComponent = ({title, color, test}) => {
  // console.log(props.title)
  //react fragment
  //destruction
  return ( 
    <>
    <button onClick={test} className={color}>{title}</button>
   
    </>
  
  )
}

export default ButtonComponent