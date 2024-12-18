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
import Publish from "./pages/publish/Publish";
import Payment from "./pages/payment/Payment";

//! Components import
import Header from "./components/Header";
import Modal from "./components/Modal";

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

  // Modal states
  const [visible, setVisible] = useState(false);
  const [component, setComponent] = useState("");
  const [urlToNavigate, setUrlToNavigate] = useState("/");

  return (
    <>
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
          visible={visible}
          setVisible={setVisible}
          component={component}
          setComponent={setComponent}
          setUrlToNavigate={setUrlToNavigate}
        ></Header>

        {/* ROUTES */}
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

          {/* Publish route */}
          <Route
            path="/publish"
            element={
              <Publish
                userToken={userToken}
                visible={visible}
                setVisible={setVisible}
                setComponent={setComponent}
                setUrlToNavigate={setUrlToNavigate}
              ></Publish>
            }
          ></Route>

          {/* Payment route */}
          <Route
            path="/payment"
            element={
              <Payment
                userToken={userToken}
                visible={visible}
                setVisible={setVisible}
                setComponent={setComponent}
                setUrlToNavigate={setUrlToNavigate}
              ></Payment>
            }
          ></Route>
        </Routes>

        {/* Modal => Signup and Login */}
        {visible && (
          <Modal
            setVisible={setVisible}
            component={component}
            setComponent={setComponent}
            setUserToken={setUserToken}
            urlToNavigate={urlToNavigate}
          ></Modal>
        )}
      </Router>
    </>
  );
}

export default App;
