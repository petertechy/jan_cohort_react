import React from 'react'
import Hero from "../assets/hero.png"

const Banner = () => {
  return (
    <div className='mx-auto col-8 shadow-sm p-4 my-4 rounded-3 '>
        <h1 className='display-1 fw-bold text-primary '>Study to become a global talent</h1>
        <img width={200} src={Hero} alt="" />
        <button className='btn btn-outline-primary my-3'>Start Now</button>
    </div>
  )
}

export default Banner