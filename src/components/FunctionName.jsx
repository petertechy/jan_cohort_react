import React from 'react'

const FunctionName = () => {

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
    

    <h1>{displayName ? `Hello, You are welcome ${myName}!` : "Enter your name Below"}</h1>
    <input type="text" onChange={handleChange}/>
    <button onClick={handleSubmit}>Change Text</button>
  

    <h1>{myAge}</h1>
    <button onClick={()=>setmyAge(myAge+1)}>Increase Age</button>
    
    </>
  )
}

export default FunctionName