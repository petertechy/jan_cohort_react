// JSX - is a functional component of react that returns javascript + HTML and export it
import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProductPage from "./components/ProductPage"

function nameOfFuction(){
  console.log("Hello Everybody")
}

const functionName = () => {
  // var myName = "Esther"
  // var myAge = 10

  const [myName, setmyName] = useState("")
  const [myAge, setmyAge] = useState(10)
  const [displayName, setdisplayName] = useState("")
  const [students, setstudents] = useState([])
  const [modal, setmodal] = useState(false)

  // const [first, setfirst] = useState(second)

  const handleChange = (event) =>{
    // console.log(event.target.value)
    setmyName(event.target.value)
  }

  const handleSubmit = () =>{
    setdisplayName(myName)
  }


  // const increaseAge = (num) =>{
  //   // myAge++
  //   // setmyAge(myAge+1)
  //   console.log(myAge)
  //   // console.log(myName)
  //   // myAge = myAge + 1
  //   // myAge += 1
  // }

  return (
    <>
    <Navbar/>
    <ProductPage/>
    <Banner/>

    <h1>{displayName ? `Hello, You are welcome ${myName}!` : "Enter your name Below"}</h1>
    <input type="text" onChange={handleChange}/>
    <button onClick={handleSubmit}>Change Text</button>
  

    <h1>{myAge}</h1>
    <button onClick={()=>setmyAge(myAge+1)}>Increase Age</button>


    <Footer/>
    </>
   
  )
}

export default functionName

//Interpolation
