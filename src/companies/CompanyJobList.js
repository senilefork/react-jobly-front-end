import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import Job from "../jobs/Job";
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";


const CompanyJobList = () =>{
    const { currentUser } = useContext(UserContext);
    const { handle } = useParams();
    
    const [company, setCompany] = useState(null);
  
    useEffect(() => {
      async function getCompany() {
        
        setCompany(await JoblyApi.getCompanyJobs(handle));
        console.log(company)
      }
  
      getCompany();
    }, [handle]);
  
    if (!company) return <h1>Loading...</h1>;

    if(!currentUser) return <Redirect to="/login" />
  
    return (
        <div>
          <h1>{company.name}</h1>
          <p style={{textAlign:'center'}}>{company.description}</p>
          {company.jobs.map(j =>(
              <Job
              title={j.title}
              salary={j.salary}
              equity={j.equity}
              key={j.id} />
          ))}
        </div>
    );
}

export default CompanyJobList;