/*

* Vinted frontend

* Login page

*/
//! Style import
import "./login.css";

//! Libraries import
import axios from "axios";
import Cookies from "js-cookie";

//! Hooks import
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//* LOGIN FUNCTION
function Login({ setUserToken, setVisible }) {
  //
  //Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badRequest, setBadRequest] = useState(null);

  // Def navigate
  const navigate = useNavigate();

  // * handleSubmit sub-function
  const handleSubmit = async (event) => {
    //
    // Prevent browser refresh
    event.preventDefault();

    //Axios request
    try {
      // Axios request
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      //Token collected and stocked in cookies
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });

      //userToken state update
      setUserToken(response.data.token);

      //Close modal
      setVisible(false);

      //Return to home
      navigate("/");

      //
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response.data.error === "Unauthorized") {
        setBadRequest("Mauvais email et/ou mot de passe");
      } else {
        setBadRequest("Erreur du serveur, veuillez réessayer");
      }
    }
  };

  return (
    <>
      <main className="log-main">
        <h2 className="log-h2">Se connecter</h2>
        <form className="log-form" onSubmit={handleSubmit}>
          {/*Form validation */}
          {badRequest ? <p className="sup-account">{badRequest}</p> : ""}

          <input
            className="log-input"
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          ></input>

          <input
            className="log-input"
            id="password"
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          ></input>

          <div>
            <button className="log-button" type="submit">
              Se connecter
            </button>
          </div>
        </form>
        <p
          className="log-bottom-text"
          onClick={() => {
            setVisible(false);
          }}
        >
          Pas encore de compte ? Inscris-toi !
        </p>
      </main>
    </>
  );
}

export default Login;
