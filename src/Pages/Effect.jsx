import React, { useEffect, useState } from "react"


const Effect = () => {
    const [num, setnum] = useState(0)
    const [name, setname] = useState("Yemi")


    useEffect(() => {
      console.log("This ran already")
    }, [num])
    

  return (
    <div>
        <h1 onClick={()=>setname("Habeeb")}>Name: {name}</h1>
        <h1 style={{backgroundColor: "red"}} onClick={()=>setnum(num+1)}>Number: {num}</h1>
    </div>
  )
}

export default Effect