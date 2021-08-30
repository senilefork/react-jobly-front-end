import React from "react";
import { Link } from "react-router-dom";
import "./Company.css"

const Company = ({ name, handle, description, logoUrl }) =>{
  
  return(
          
          <Link className="company-card-container" to={`/companies/${handle}`}>
           <div className="card">
            <div className="card-header">
              <h2>{name}</h2>             
              {/*<img className="logo" src={logoUrl} alt={name}/>*/}
             </div>
             <br/>
             <div className="description">
               <p>{description}</p>
             </div>
           </div>
          </Link>
        
     
  )
}

export default Company;
