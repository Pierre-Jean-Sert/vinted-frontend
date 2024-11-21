/*

* Vinted frontend

* Offer page

*/

//! Libraries import
import axios from "axios";

//! Hooks import
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//* OFFER FUNCTION
function Offer() {
  const { id } = useParams();
  const url = "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + id;

  //States
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //useEffect hook to recover data from API
  useEffect(() => {
    const fetchData = async () => {
      //

      try {
        // Axios request
        const response = await axios.get(url);

        //Response.data stocked in data state
        setData(response.data);

        //isLoading => false
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    //fetchData calling
    fetchData();
  }, [url]);

  return (
    <>
      {isLoading ? (
        <p>En cours de chargement...</p>
      ) : (
        <main>
          <div>Image</div>
          <div>Bloc de texte</div>
        </main>
      )}
    </>
  );
}

export default Offer;
