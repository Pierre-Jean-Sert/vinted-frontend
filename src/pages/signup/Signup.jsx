/*

* Vinted frontend

* Signup page

*/

//! Libraries import
import axios from "axios";
import Cookies from "js-cookie";

//! Hooks import
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//* HOME FUNCTION
function Signup() {
  //Form states
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

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

      console.log(token);

      //Return to home
      navigate("/");

      //
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main>
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input
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
            id="password"
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          ></input>

          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            onClick={() => setNewsletter(true)}
          ></input>

          <span> S'inscrire à notre newsletter</span>

          <div>
            <button type="submit">S'inscrire</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Signup;
