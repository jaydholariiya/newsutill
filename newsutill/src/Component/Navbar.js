import React, { Component } from 'react'
import { Link } from "react-router-dom"

// import PropTypes from 'prop-types'

export class Navbar extends Component {
  

  render() {
    return (
      <>
      
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-dark">
  <div className="container-fluid mx-5 px-5">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/sports">Sports</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/business">Business</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/entertainment">Entertainment</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/general">General</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/health">Health</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/technology">Technology</Link>
        </li>


      </ul>
      <form className="d-flex" role="search">
        <input className="searchbar form-control mx-2 " type="search" placeholder="Search"/>
       
        <button className=" btn btn-outline-success mx-2 text-white" ><Link className="textd text-white" to="/login">LogIn</Link></button>
        <button className=" btn btn-outline-warning"><Link className="textd text-white" to="/">SignUp</Link></button>
       
      </form>
    </div>
  </div>
</nav>
      
      
      </>
    )
  }
}

export default Navbar
