import React from 'react'
import { useSelector } from 'react-redux'

const Services = () => {
    const count = useSelector((state)=>state.counterReducer.count)
  return (
    <div>
        <h1>Services Page</h1>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default Services