/*

* Vinted frontend

* Publish page

*/

import Login from "../login/Login";

//! Style import
import "./publish.css";

//! Libraries import
import axios from "axios";

//! Hooks import
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//* PUBLISH FUNCTION
function Publish({
  userToken,
  visible,
  setVisible,
  setComponent,
  setUrlToNavigate,
}) {
  //

  //Form states
  const [file, setFile] = useState({});

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState(false);

  const [isCompleted, setIsCompleted] = useState(null);

  // Def navigate
  const navigate = useNavigate();

  // * Check user connection
  useEffect(() => {
    if (!userToken) {
      navigate("/");
      setUrlToNavigate("/publish");
      setVisible(!visible);
      setComponent("login");
    }
  }, [userToken]);

  // * handleSubmit sub-function
  const handleSubmit = async (event) => {
    //
    // Prevent browser refresh
    event.preventDefault();

    //Check fields
    if (!title || !price || !file) {
      return setIsCompleted(
        "Les champs Titre, Prix et Photo sont obligatoires"
      );
    }

    // formData builder
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", location);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("picture", file);

    //Axios request
    try {
      // Axios request
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      //Navitage to offer
      navigate(`/offers/${response.data._id}`);

      //
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <main className="pub-main">
      <div className="container">
        <h2 className="pub-h2">Vends ton article</h2>

        {/* Form */}
        <form className="pub-form" onSubmit={handleSubmit}>
          {/* File */}
          <div className="pub-file">
            <label htmlFor="file">
              <i className="fa-solid fa-plus"></i> Ajoute une photo
            </label>
            <input
              id="file"
              type="file"
              name="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            ></input>
          </div>

          {/* Title and description */}
          <div className="pub-title-description">
            <div>
              <label htmlFor="title">Titre</label>
              <input
                className="pub-title-description-input1"
                id="title"
                type="text"
                name="title"
                placeholder="ex : Chemise Sézane verte"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                value={title}
              ></input>
            </div>

            <div>
              <label htmlFor="description">Décris ton article</label>
              <input
                className="pub-title-description-input2"
                id="description"
                type="text"
                name="description"
                placeholder="ex : portée quelquefois, taille correctement"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                value={description}
              ></input>
            </div>
          </div>

          {/* Details */}
          <div className="pub-details">
            <div>
              <label htmlFor="brand">Marque</label>
              <input
                id="brand"
                type="text"
                name="brand"
                placeholder="ex : Zara"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
                value={brand}
              ></input>
            </div>

            <div>
              <label htmlFor="size">Taille</label>
              <input
                id="size"
                type="text"
                name="size"
                placeholder="ex : L / 40 / 12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
                value={size}
              ></input>
            </div>

            <div>
              <label htmlFor="color">Couleur</label>
              <input
                id="color"
                type="text"
                name="color"
                placeholder="ex : Fushia"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
                value={color}
              ></input>
            </div>

            <div>
              <label htmlFor="condition">Etat</label>
              <input
                id="condition"
                type="text"
                name="condition"
                placeholder="ex : Neuf avec étiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
                value={condition}
              ></input>
            </div>

            <div>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="ex : Paris"
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                value={location}
              ></input>
            </div>
          </div>

          {/* Price and exchange */}
          <div className="pub-price-bloc">
            <div className="pub-price">
              <label htmlFor="price">Prix</label>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="0,00 €"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                value={price}
              ></input>
            </div>

            <div className="pub-price-checkbox">
              <input
                id="exchange"
                type="checkbox"
                name="exchange"
                onChange={(event) => {
                  setExchange(event.target.value);
                }}
                value={exchange}
              ></input>
              <p>Je suis intéressé(e) par les échanges</p>
            </div>

            {/* if Error */}
            {isCompleted ? <p className="pub-error">{isCompleted}</p> : ""}
          </div>

          {/* Button */}
          <div className="pub-button">
            <button type="submit">Ajouter</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Publish;
