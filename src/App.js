import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes";
import Navbar from "./navbar/Navbar";
import JoblyApi from "./api";
import PutTokenInLS from "./hooks/localStorage";
import jwt from "jsonwebtoken";
import UserContext from "./context/UserContext";

function App() {

  const [token, setToken] = PutTokenInLS(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [userApplications, setUserApplication] = useState([]);

  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if(token){
        try{
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setUserApplication(currentUser.applications)
        }catch(e){
          setCurrentUser(null);
        }
      } 
    }
    getCurrentUser();
  }, [token])
  
  async function login(formData){
    try{
      let token = await JoblyApi.login(formData);
      setToken(token);
      console.log(token);
      return { loggedIn : true }
    }catch(errors){
      return { loggedIn: false, errors}
    }
  }

  async function signup(formData){
    try{
      let token = await JoblyApi.register(formData);
      setToken(token);
    return { signedUp: true }
    }catch(errors){
      return { signedUp: false, errors }
    }
  }

  function logOut(){
    setToken(null);
    setCurrentUser(null);
  }

  function apply(id){
    JoblyApi.applyToJob(currentUser.username,id);
    setUserApplication([...userApplications, id]);  
  }


  return (
   <div>
   <BrowserRouter>
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
     <Navbar logout={logOut}/>
     <Routes login={login} signup={signup} apply={apply} />
    </UserContext.Provider>
   </BrowserRouter>
   </div>
  );
}

export default App;

// Make login, signup, and logout functions in the App component.

// By passing login, logout, and signup functions down to the login and signup forms and the navigation bar, they’ll be able to call centralized functions to perform these processes.

// Add token as a piece of state in App, along with state for the currentUser.

// Create an effect triggered by a state change of the token: this should call the backend to get information on the newly-logged-in user and store it in the currentUser state.

// Expose the current user throughout the app with a context provider. This will make it easy to refer to the current app in navigation, on pages, and so on.

// This would be an excellent place to use useContext, so you can store the current user’s info high up in your hierarchy, like on the App component.
