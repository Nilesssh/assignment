import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import LoginSignUpPage from "./LoginSignUpPage";
import PrivateRoute from "./PrivateRoute";
import Users from "./Users";
function App() {
  const [isLogged, setIsLogged] = useState(false);

  function handleLoginButton(){
    setIsLogged(sessionStorage.getItem("loggedIn"))
  }

  


  return (
    <>
      <BrowserRouter>
        <Navbar onClickLoginBtn={handleLoginButton} />
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginSignUpPage />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route
              path="/about"
              element={<PrivateRoute element={<About />} />}
            />
            <Route
              path="/userlist"
              element={
                <PrivateRoute
                  element={
                    <Users 
                    />
                  }
                />
              }
            />
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
