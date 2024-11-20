/*

* Vinted frontend

* Header component

*/

//! Img import
import logo from "../assets/vinted-logo.png";

//* HEADER FUNCTION
function Header() {
  return (
    <header>
      <div>
        <img className="logo" src={logo} alt="Vinted Logo" />
      </div>

      <input></input>

      <div className="user">
        <button className="header-button">S'inscrire</button>
        <button className="header-button">Se connecter</button>
      </div>

      <div>
        <button className="header-button colored">Vends tes articles</button>
      </div>
    </header>
  );
}

export default Header;
