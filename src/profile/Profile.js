import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom"
import UserContext from "../context/UserContext";
import "./Profile.css";
import JoblyApi from "../api";

const Profile = () =>{
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: ""
  }
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e =>{
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

async function handleSubmit(e){
  e.preventDefault();
  let profileData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password
  };
  let res;
  try{
    res = await JoblyApi.updateUser(profileData, currentUser.username);
  }catch{
    console.log("error")
  }
  setCurrentUser(res);
}

  if(!currentUser) return <Redirect to="/login" />

  return(
    <div>
      <h1>Profile</h1>
        <form className="profile-card" onSubmit={handleSubmit}>
        <div className="profile-inputs">
          <h5>Username:</h5>
          <p>{currentUser.username}</p>
          <h5>First name:</h5>
          <input 
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder={currentUser.firstName}/>
          <h5>Last name:</h5>
          <input 
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder={currentUser.lastName}/>
          <h5>Email:</h5>
          <input 
          type="text"
          name="email"
          onChange={handleChange}
          placeholder={currentUser.email}/>
          <input
          type="password"
          name="password"
          onChange={handleChange} />
          <button className="profile-button">Save Changes</button>
        </div>
        </form>
      </div>
  )
}

export default Profile;