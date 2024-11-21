/*

* Vinted frontend

* Login page

*/

//! Libraries import
import axios from "axios";
import Cookies from "js-cookie";

//! Hooks import
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//* LOGIN FUNCTION
function Login() {
  //Form states

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
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

          <div>
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
