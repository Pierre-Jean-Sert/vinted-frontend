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

//* HEADER FUNCTION
function Header({
  userToken,
  setUserToken,
  userSearch,
  setUserSearch,
  userSort,
  setUserSort,
}) {
  //
  // Def navigate
  const navigate = useNavigate();

  return (
    <header>
      <div onClick={() => navigate("/")}>
        <img className="logo" src={logo} alt="Vinted Logo" />
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>

          {/* Search bar */}
          <input
            id="search"
            type="text"
            placeholder="Rechercher des articles"
            name="search"
            onChange={(event) => {
              setUserSearch(event.target.value);
            }}
            value={userSearch}
          ></input>
        </div>

        {/* Other filters */}
        <div className="other-filters">
          <div>
            <p>Trier par prix :</p>
            {/* Switch */}
            <label className="switch">
              <input
                id="switch"
                name="switch"
                type="checkbox"
                onClick={() => {
                  if (userSort === "price-asc") {
                    setUserSort("price-desc");
                  } else {
                    setUserSort("price-asc");
                  }
                }}
              ></input>
              <span className="slider"></span>
            </label>
          </div>

          {/* Slider */}
          <div>
            <p>Prix entre :</p>
          </div>
        </div>
      </div>

      {/* Check if user is connecter or not */}
      {userToken ? (
        <button
          className=" header-button disconnect-button"
          onClick={() => {
            Cookies.remove("token");
            setUserToken(null);
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
