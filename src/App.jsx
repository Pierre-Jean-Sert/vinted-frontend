/*

* Vinted frontend

* App function

*/

//! Style import
import "./App.css";

//! Libraries import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

//! Pages import
import Home from "./pages/home/Home";
import Offer from "./pages/offers/Offer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/login";

//! Components import
import Header from "./components/Header";

//! Hooks import
import { useState } from "react";

//* APP FUNCTION
function App() {
  //
  // State
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);

  return (
    <>
      {/* ROUTES */}
      <Router>
        {/* HEADER */}
        <Header userToken={userToken} setUserToken={setUserToken}></Header>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home></Home>}></Route>
          {/* Offer route */}
          <Route path="/offers/:id" element={<Offer></Offer>}></Route>
          {/* Signup route */}
          <Route
            path="/user/signup"
            element={
              <Signup
                userToken={userToken}
                setUserToken={setUserToken}
              ></Signup>
            }
          ></Route>
          {/* Login route */}
          <Route
            path="/login"
            element={
              <Login userToken={userToken} setUserToken={setUserToken}></Login>
            }
          ></Route>
        </Routes>
      </Router>

      {/* FOOTER */}
    </>
  );
}

export default App;
