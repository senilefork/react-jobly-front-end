import React, { useState, useEffect } from "react";

const PutTokenInLS = () =>{
    const initialVal = window.localStorage.getItem("currentUserToken") || null;
  const [currentUserToken, setCurrentUserToken] = useState(initialVal);

  useEffect(() =>{
    window.localStorage.setItem('currentUserToken', currentUserToken);
  }, [currentUserToken]);

  return [currentUserToken, setCurrentUserToken]
}

export default PutTokenInLS;