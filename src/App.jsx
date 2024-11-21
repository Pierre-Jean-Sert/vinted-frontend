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

//! Components import
import Header from "./components/Header";

//! Hooks import

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
        </Routes>
      </Router>

      {/* FOOTER */}
    </>
  );
}

export default App;
