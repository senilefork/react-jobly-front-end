import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./Homepage.css"

const Homepage = () =>{
  const { currentUser } = useContext(UserContext);

  if(!currentUser){
    return(
      <div className="homepage-login-signup">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place!</p>
        <div className="homepage-buttons-div">
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
  )
  }
  return(
    <div className="homepage-container">
      <h1>Welcome Back {currentUser.firstName}!</h1>
    </div>
  )
}

export default Homepage;