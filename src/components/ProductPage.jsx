import React, { useState } from "react";





const ProductPage = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [age, setage] = useState(0)
    const [email, setemail] = useState("")
    const [allUsers, setallUsers] = useState([])
    
    // const addUserFirstName = (event) =>{
    //     setfirstName(event.target.value)
    //     // alert("Workinggggg")
    // }

    const handleSubmit = ()=>{
        let newUser = {firstName, lastName, age, email} 
        setallUsers([...allUsers, newUser])
// let copyOfObject = {...userObject, address: "Opic Oke-ilewo"}
        //spread operator ...
        // console.log(copyOfObject)
    }

    let gender = "female"

  return (
    <div className="mx-auto col-7 shadow-sm p-3 my-4">
      <h1 className="text-success">Add Users</h1>
      <h1>{gender == "male" ? "You are male child" : "You are a female child"}</h1>
      <input
        className="mb-3 form-control"
        type="text"
        placeholder="enter your first name"
        onChange={()=>setfirstName(event.target.value)}
      />
      <input
        className="mb-3 form-control"
        type="text"
        placeholder="enter your last name"
        onChange={()=>setlastName(event.target.value)}
      />
      <input
        className="mb-3 form-control"
        type="number"
        placeholder="enter your age"
        onChange={()=>setage(event.target.value)}
      />
      <input
        className="mb-3 form-control"
        type="email"
        placeholder="example@gmail.com"
        onChange={()=>setemail(event.target.value)}
      />
      <button onClick={handleSubmit} className="btn btn-success w-100 my-3">Submit</button>

        
      {/* {allUsers.map((users, index)=>(
        <div key={index}>
            <h1>First Name: {users.firstName}</h1>
            <h1>Last Name: {users.lastName}</h1>
            <h1>Age: {users.age}</h1>
            <h1>Email: {users.email}</h1>
        </div>
      ))} */}

      
      <table className="table table-stripped">
        <tr>
        <th>firstName</th>
        <th>firstName</th>
        <th>firstName</th>
        <th>firstName</th>
        </tr>
        {allUsers.map((users, index)=>(
        
            <tr key={index}>
                <td>{users.firstName}</td>
                <td>{users.lastName}</td>
                <td>{users.age}</td>
                <td>{users.email}</td>
            </tr>
        
      ))}

      </table>
      
    </div>
  );
};

export default ProductPage;
