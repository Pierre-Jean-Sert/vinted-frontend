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
  // Shared states
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);
  const [userSearch, setUserSearch] = useState("");
  const [userSort, setUserSort] = useState("price-asc");
  const [userPrice, setUserPrice] = useState([10, 200]);

  return (
    <>
      {/* ROUTES */}
      <Router>
        {/* HEADER */}
        <Header
          userToken={userToken}
          setUserToken={setUserToken}
          userSearch={userSearch}
          setUserSearch={setUserSearch}
          userSort={userSort}
          setUserSort={setUserSort}
          userPrice={userPrice}
          setUserPrice={setUserPrice}
        ></Header>

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <Home
                userSearch={userSearch}
                userSort={userSort}
                userPrice={userPrice}
              ></Home>
            }
          ></Route>

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
