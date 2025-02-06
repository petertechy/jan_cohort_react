import React, { useEffect, useState } from "react"


const Effect = () => {
    const [num, setnum] = useState(0)
    const [name, setname] = useState("Martha")


    useEffect(() => {
      console.log("I just landed in the Effect component")

      return () => {
        console.log("I just left the component")
      };
    },[])
    

  return (
    <div>
        <h1 onClick={()=>setname("Habeeb")}>Name: {name}</h1>
        <h1 style={{backgroundColor: "red"}} onClick={()=>setnum(num+1)}>Number: {num}</h1>
    </div>
  )
}

export default Effect