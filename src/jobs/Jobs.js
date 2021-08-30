import React, { useEffect, useState, useContext } from "react";
import Job from "./Job";
import JoblyApi from "../api";
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";
import SearchForm from "../search/SearchForm";

const Jobs = ({ apply }) =>{
  const { currentUser } = useContext(UserContext);
  const [jobs, setJobs] = useState(null);

  useEffect(() =>{
    search();
  },[])

  async function search(title){
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if(!jobs) return (<h1>Loading...</h1>);

  if(!currentUser) return <Redirect to="/login" />

  if(jobs.length === 0){
    return(
      
        <div>
        <SearchForm search={search} placeHolderText="Search job title..."/>
         <h1>No results found...</h1>
        </div>
      
    )
  }
  
  return(
      <div>
      <SearchForm search={search} placeHolderText="Search job title..."/>
        {jobs.map(j =>(
          <Job 
           title={j.title}
           salary={j.salary}
           equity={j.equity}
           key={j.id}
           id={j.id}
           apply={apply}/>
        ))}
      </div>
  )
}

export default Jobs;