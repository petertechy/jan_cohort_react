import React from 'react'
import ButtonComponent from './ButtonComponent'

const CardsComponent = (props) => {
    const triggerAction = () =>{
        alert("Working")
      }
  return (

    <>
    <h1 className={props.style}>{props.title}</h1>
    <div className='d-flex border justify-content-center shadow-sm my-4 p-4 gap-3'>

    <div>
        <h1>Hello</h1>
<ButtonComponent title="Edit" color= "btn btn-warning me-5" test= {triggerAction}/>

    </div>

    <div>
    <h1>I am here</h1>
    <ButtonComponent title="Delete" color="btn btn-danger me-5" test={triggerAction}/>
    </div>

<div>
    <h1>Are you there</h1>

    <ButtonComponent title="More Details" color="btn btn-success"/>
</div>
    </div>
    </>
  )
}

export default CardsComponent