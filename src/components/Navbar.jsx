import React from 'react'
import style from "./Navbar.module.css"
// import "./Navbar.module.css"


const myStyle = {
  color: "white",
  backgroundColor: "black",
  fontSize: "40px",
  padding: "30px 0",
  textAlign: "center"
}

const Navbar = () => {

  return (
    <div>
      {/* <h1 style={{fontSize: "40px", color: "red"}}>Hello World</h1>
      <h1 style={myStyle}>New Text is here</h1>
        <h1 id={style.heading} className=''>This is my Nav Bar</h1> */}
        {/* <p className={style.subtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis ratione iste deserunt incidunt numquam molestias alias, quia et non sed hic, rem excepturi molestiae aut, iure cumque eaque temporibus?</p> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
