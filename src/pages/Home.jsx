/*

* Vinted frontend

* Home page

*/

//! Libraries import
import axios from "axios";
import { Link } from "react-router-dom";

//! Hooks import
import { useState, useEffect } from "react";

//* HOME FUNCTION
function Home() {
  //
  //States
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //useEffect hook to recover data from API
  useEffect(() => {
    const fetchData = async () => {
      //

      try {
        // Axios request
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );

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
  }, []);

  return (
    <>
      {/* MAIN */}
      <main>
        {/* Bloc 1 : Background image and bloc */}
        <div className="home-background">
          <div className=" container home-bloc">
            <h2>Prêts à faire du tri dans vos placards ?</h2>
            <button className="sell">Commencer à vendre</button>
          </div>
        </div>

        {/* Bloc 2 : Offer list */}
        <div className="container">
          {isLoading ? (
            <p>En cours de chargement...</p>
          ) : (
            <div className="offers">
              {data.offers.map((offer) => {
                return (
                  <>
                    {/* Link to offer */}
                    <Link to={`/offer/${offer._id}`}>
                      {/* OFFER CARD */}
                      <div key={offer._id} className="offer-card">
                        <div className="owner-name">
                          {/* Owner avatar */}
                          <img
                            className="owner-image"
                            src={offer?.owner?.account?.avatar?.secure_url}
                            alt="Avatar profil"
                          />

                          {/* Owner name */}
                          <span>{offer.owner.account.username}</span>
                        </div>

                        {/* Clothing photo */}
                        <img
                          className="clothing-photo"
                          src={offer.product_image.secure_url}
                          alt={offer.product_name}
                        />

                        <div>
                          {/* Price */}
                          <p className="price">{offer.product_price} €</p>

                          {/* Size and Brand */}
                          {offer.product_details.map((brand) => {
                            return (
                              <>
                                <p>{brand.TAILLE ? brand.TAILLE : ""}</p>
                              </>
                            );
                          })}

                          {/* Brand */}
                          {offer.product_details.map((brand) => {
                            return (
                              <>
                                <p>{brand.MARQUE ? brand.MARQUE : ""}</p>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
