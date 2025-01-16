// JSX - is a functional component of react that returns javascript + HTML and export it

import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function nameOfFuction(){
  console.log("Hello Everybody")
}

const functionName = () => {
  var myName = "Esther"
  var myAge = 10

  // const [first, setfirst] = useState(second)


  const increaseAge = (num) =>{
    myAge++
    console.log(myAge, num)
    // myAge = myAge + 1
    // myAge += 1
  }

  return (
    <>
    <Navbar/>
    <Banner/>

    <h1>Hello Everybody, my name is {myName}</h1>
    <h1>{myAge}</h1>

    <button onClick={()=>increaseAge(12)}>Increase Age</button>


    <Footer/>
    </>
   
  )
}

export default functionName

//Interpolation
