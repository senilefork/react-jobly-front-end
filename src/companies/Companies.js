import React, { useEffect, useState } from "react";
import JoblyApi from "../api"
import Company from "./Company";
import SearchForm from "../search/SearchForm";

//TODO when click on company card, user should be routed to jobs available for that company
const Companies = () =>{
  const [companies, setCompanies] = useState(null);

  useEffect(() =>{  
      search();   
  }, []);

  async function search(name) {
    const companies = await JoblyApi.getCompanies(name);
    setCompanies(companies)
  }
  
  if(!companies) return <h1>Loading...</h1>;
  
  if(companies.length === 0){
    return(
      <div>
      <SearchForm search={search} placeHolderText="Search company name..."/>
       <h1>No results found...</h1>
      </div>
    )
  } 

  return(
      <div className="companies-container">
      <SearchForm search={search} placeHolderText="Search company name..."/>
       {companies.map(c => (
         <Company
         name={c.name}
         handle={c.handle}
         key={c.handle} 
         description={c.description}
         logoUrl={c.logoUrl}/>
       ))}
      </div>
  )
}

export default Companies;