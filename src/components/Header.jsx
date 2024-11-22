/*

* Vinted frontend

* Header component

*/

//! Img import
import logo from "../assets/vinted-logo.png";

//! Libraries import
import Cookies from "js-cookie";

//! Hooks import
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//* HEADER FUNCTION
function Header() {
  //
  // Def navigate
  const navigate = useNavigate();

  //States
  const [isConnected, setIsConnected] = useState(false);

  // Check Token and connection
  useEffect(() => {
    if (Cookies.get("token")) {
      setIsConnected(true);
    }
  }, []);

  return (
    <header>
      <div onClick={() => navigate("/")}>
        <img className="logo" src={logo} alt="Vinted Logo" />
      </div>

      <input
        className="search"
        id="search"
        type="text"
        placeholder="Rechercher des articles"
        name="search"
      ></input>

      {/* Check if user is connecter or not */}
      {isConnected ? (
        <button
          className=" header-button disconnect-button"
          onClick={() => {
            Cookies.remove("token");
            setIsConnected(false);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <div className="user">
          <button
            className="header-button"
            onClick={() => navigate("/user/signup")}
          >
            S'inscrire
          </button>
          <button className="header-button" onClick={() => navigate("/login")}>
            Se connecter
          </button>
        </div>
      )}

      <div>
        <button className="header-button colored">Vends tes articles</button>
      </div>
    </header>
  );
}

export default Header;
