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

//! Components import
import Header from "./components/Header";

//! Hooks import

//* APP FUNCTION
function App() {
  return (
    <>
      {/* HEADER */}
      <Header></Header>

      {/* ROUTES */}
      <Router>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home></Home>}></Route>
          {/* Offer route */}
          <Route path="/offer/:id" element={<Offer></Offer>}></Route>
        </Routes>
      </Router>

      {/* FOOTER */}
    </>
  );
}

export default App;
