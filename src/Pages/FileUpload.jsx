import React, { useState } from 'react'
import axios from 'axios'

const FileUpload = () => {
    const endpoint = "http://localhost:5500/user/upload"
    const [file, setfile] = useState("")
    const [image, setimage] = useState("")
    const handleFile = (e)=>{
        let myImage = e.target.files[0]
        let imageReader = new FileReader()
        // let song = new Audio("gwagwalada.mp4")
        // song.play()

        imageReader.readAsDataURL(myImage)
        
        imageReader.onload = ()=>{
            setfile(imageReader.result)

        }

    }

    const uploadFile = ()=>{
        axios.post(endpoint, {file})
        .then((response)=>{
            console.log(response.data)
            setimage(response.data.imageUrl)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


  return (
    <div className='mx-auto col-7 p-4 text-center rounded-3 my-4'>
        <h1 className='fw-bold display-3 mb-3 text-success'>FileUpload</h1>
        <hr />

        <input type="file" onChange={(e)=>handleFile(e)}/>

        <button onClick={uploadFile} className='btn btn-success w-100 my-4'>File Upload</button>

        <img width={300} src={image} alt="" />
    </div>
  )
}

export default FileUpload