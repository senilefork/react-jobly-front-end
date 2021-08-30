import React, { useContext, useEffect, useState } from "react";
import "./Job.css"
import UserContext from "../context/UserContext";

//TODO create function that allows user to apply for job
const Job = ({ title, salary, equity, id, apply }) =>{
  const { currentUser } = useContext(UserContext);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() =>{
    if(currentUser.applications.includes(id)){
      setHasApplied(true);
    }
  }, [hasApplied,id])

  const handleClick = () =>{
    console.log("click info:", currentUser.username, id);
    apply(id);
    setHasApplied(true);
  }

  return(
    <div className="job-container">
        <div id={id} className="job-card">
          <h2>{title}</h2>
          <br/>
          <p>Salary: {salary}</p>
          <p>Equity: {equity}</p>
         
          <button className="job-button" disabled={hasApplied} onClick={handleClick}>{hasApplied ? "Applied!" : "Apply!"}</button>
        </div>
    </div>
    )
}

export default Job;