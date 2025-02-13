import React, { useEffect, useRef, useState } from 'react'

const Reference = () => {
    const [number, setnumber] = useState(0)
    let myNumber = useRef(0)
    let myHeader = useRef("")
    useEffect(() => {
        setnumber(3)
        myNumber.current = 9
        console.log(myNumber.current)
    })

    const changeHeader = ()=>{
        myHeader.current.innerText = "Hello Martha"
        myHeader.current.style.color = "green"
        myHeader.current.style.fontSize = "50px"
        console.log(myHeader.current.innerText)
    }

    
  return (
    <>
        <h1>Use Reference Hook</h1>
        <h1 ref={myHeader}>Hello World</h1>
        <button onClick={changeHeader}>Change Name</button>
        <h1>{number}</h1>
    </>
  )
}

export default Reference