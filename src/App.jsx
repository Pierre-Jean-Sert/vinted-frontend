/*

* Vinted frontend

* App function

*/

//! Style import
import "./App.css";

//! Libraries import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//! Pages import
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/login";

//! Components import
import Header from "./components/Header";

//* APP FUNCTION
function App() {
  return (
    <>
      {/* ROUTES */}
      <Router>
        {/* HEADER */}
        <Header></Header>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home></Home>}></Route>
          {/* Offer route */}
          <Route path="/offers/:id" element={<Offer></Offer>}></Route>
          {/* Signup route */}
          <Route path="/user/signup" element={<Signup></Signup>}></Route>
          {/* Login route */}
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>

      {/* FOOTER */}
    </>
  );
}

export default App;
