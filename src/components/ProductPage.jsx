import React, { useState } from "react";

const ProductPage = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState(0);
  const [email, setemail] = useState("");
  const [allUsers, setallUsers] = useState([]);
  const [editUsers, seteditUser] = useState(null)

  // const addUserFirstName = (event) =>{
  //     setfirstName(event.target.value)
  //     // alert("Workinggggg")
  // }

  const handleSubmit = () => {
    let newUser = { firstName, lastName, age, email };

    if(editUsers !== null){
      let updatedUser = [...allUsers]
      updatedUser[editUsers] = newUser
      setallUsers(updatedUser)
      seteditUser(null) //Exit from edit mode
    }else{
    setallUsers([...allUsers, newUser]);
    }

    // let copyOfObject = {...userObject, address: "Opic Oke-ilewo"}
    //spread operator ...
    // console.log(copyOfObject)
    setfirstName("")
    setlastName("")
    setage(0)
    setemail("")
   
  };

  let gender = "female";

  const deleteUser = (index) => {
    // console.log("clicked");
    let confirmed = confirm("Are you sure you want to delete?")
    if(confirmed){
      let newAllUsers = [...allUsers]
      newAllUsers.splice(index, 1)
      // console.log(newAllUsers)
      setallUsers(newAllUsers)
    }
  };

  const editUser = (index) =>{
    // console.log("yessssssss")
    // console.log(index)
    let userToEdit = allUsers[index];
    // console.log(userToEdit)
    setfirstName(userToEdit.firstName)
    setlastName(userToEdit.lastName)
    setage(userToEdit.age)
    setemail(userToEdit.email)
    seteditUser(index)

  }

  return (
    <div className="mx-auto container shadow-sm p-3 my-4">
      <h1 className="text-success">Add Users</h1>
      <h1>
        {gender == "male" ? "You are male child" : "You are a female child"}
      </h1>
      <input
        className="mb-3 form-control"
        type="text"
        placeholder="enter your first name"
        onChange={() => setfirstName(event.target.value)}
        value={firstName}
      />
      <input
        className="mb-3 form-control"
        type="text"
        placeholder="enter your last name"
        onChange={() => setlastName(event.target.value)}
        value={lastName}
      />
      <input
        className="mb-3 form-control"
        type="number"
        placeholder="enter your age"
        onChange={() => setage(event.target.value)}
        value={age}
      />
      <input
        className="mb-3 form-control"
        type="email"
        placeholder="example@gmail.com"
        onChange={() => setemail(event.target.value)}
        value={email}
      />
      <button onClick={handleSubmit} className="btn btn-success w-100 my-3">
        {editUsers !== null  ? `Update User` : `Submit`}
      </button>

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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {allUsers == 0 ? 
      <div className="">No Users yet!</div> :
      
        allUsers.map((users, index) => (
          <tr key={index}>
            <td>{users.firstName}</td>
            <td>{users.lastName}</td>
            <td>{users.age}</td>
            <td>{users.email}</td>
            <button onClick={()=>editUser(index)} className="btn btn-warning me-3">Edit</button>
            <button onClick={()=>deleteUser(index)} className="btn btn-danger">
              Delete
            </button>
          </tr>
        ))
      }
      </table>
    </div>
  );
};

export default ProductPage;
