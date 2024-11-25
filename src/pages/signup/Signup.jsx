/*

* Vinted frontend

* Signup page

*/

//! Style import
import "./signup.css";

//! Libraries import
import axios from "axios";
import Cookies from "js-cookie";

//! Hooks import
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//* SIGNUP FUNCTION
function Signup({ setUserToken, setVisible }) {
  //Form states
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [badRequest, setBadRequest] = useState(null);

  // Def navigate
  const navigate = useNavigate();

  // * handleSubmit sub-function
  const handleSubmit = async (event) => {
    //
    // Prevent browser refresh
    event.preventDefault();

    //Check fields
    if (!userName || !email || !password) {
      return setBadRequest("Un ou plusieurs champs sont vides");
    }

    //Axios request
    try {
      // Axios request
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: userName,
          email: email,
          password: password,
          newsletter: newsletter,
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
      if (error.response.data.message === "This email already has an account") {
        setBadRequest("Cet email a déjà un compte chez nous !");
      } else {
        setBadRequest("Erreur du serveur, veuillez réessayer");
      }
    }
  };

  return (
    <>
      <main className="sup-main">
        <h2 className="sup-h2">S'inscrire</h2>
        <form className="sup-form" onSubmit={handleSubmit}>
          {/*Form validation */}
          {badRequest ? <p className="sup-account">{badRequest}</p> : ""}

          <input
            className="sup-input"
            id="userName"
            type="text"
            placeholder="Nom d'utilisateur"
            name="userName"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={userName}
          ></input>

          <input
            className="sup-input"
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
            className="sup-input"
            id="password"
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          ></input>

          <div className="checkbox">
            <input
              className="checkbox-icon"
              type="checkbox"
              id="newsletter"
              name="newsletter"
              onChange={() => setNewsletter(!newsletter)}
              checked={newsletter}
            ></input>

            <p>S'inscrire à notre newsletter</p>
          </div>

          <p className="disclaimer">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>

          <div>
            <button className="sup-button" type="submit">
              S'inscrire
            </button>
          </div>
        </form>
        <p className="sup-bottom-text" onClick={() => navigate("/login")}>
          Tu as déjà un compte ? Connecte-toi
        </p>
      </main>
    </>
  );
}

export default Signup;
