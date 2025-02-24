import React, { useEffect, useState } from 'react'

const Chat = ({socket}) => {
    const [message, setMessage] = useState("")
    const [allmessage, setallMessage] = useState([])
    useEffect(() => {
        if(socket.current){
            socket.current.on("broadcastMsg", (receivedMsg)=>{
                setallMessage([...allmessage, receivedMsg])
                // console.log(receivedMsg)
            })
        }
    })
    

    const sendMessage = () =>{
        // console.log(message)
        socket.current.emit("sendMsg",message)
    }

  return (
    <>
        <div>
            {allmessage.map((msg,index)=>(
                <div key={index}>
                    {msg}
                </div>
            ))}
   
        </div>

      


        <input type="text" onChange={(e)=>setMessage(e.target.value)}/>
        <button onClick={sendMessage}>Send Message</button>
    </>
  )
}

export default Chat