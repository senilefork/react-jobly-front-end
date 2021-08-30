import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import "./Navbar.css"

//TODO create a logged in nav and return appropriate nav based on if user is logged in
const Navbar = ({ logout }) =>{
  const { currentUser } = useContext(UserContext);

  if(currentUser){
    return(
  
      <nav>
        <ul className="container">   
           <li>
             <NavLink to="/">Jobly</NavLink>
           </li>      
           <li>
             <NavLink to="/companies">Companies</NavLink>
           </li>
           <li>
             <NavLink to="/jobs">Jobs</NavLink>
           </li>
           <li>
             <NavLink to="/profile">Profile</NavLink>
           </li>  
           <div className="logout">
            <li>
             <Link to="/" onClick={logout}>Log out {currentUser.firstName}</Link>
            </li>
           </div>
        </ul>
      </nav>     
    
    )
  } else {
    return(
  
      <nav>
        <ul className="container">     
           <li>
             <NavLink to="/">Jobly</NavLink>
           </li>    
           <li>
             <NavLink to="/companies">Companies</NavLink>
           </li>  
           <div className="login-signup">      
             <li>
              <NavLink to="/signup">Sign Up</NavLink>
             </li>
             <li>
              <NavLink to="/login">Login</NavLink>
             </li> 
          </div>       
        </ul>
      </nav>     
    
    )
  }

}

export default Navbar;