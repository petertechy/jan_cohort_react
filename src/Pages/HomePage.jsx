import React from 'react'
import CardsComponent from '../components/CardsComponent'

const HomePage = (props) => {
  return (
    <div>
        <h1>This is my Home page</h1>
        <p>{props.desc}</p>
        <CardsComponent/>
    </div>
  )
}

export default HomePage