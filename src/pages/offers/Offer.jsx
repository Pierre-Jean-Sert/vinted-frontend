/*

* Vinted frontend

* Offer page

*/

//! Libraries import
import axios from "axios";

//! Hooks import
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

//* OFFER FUNCTION
function Offer() {
  const { id } = useParams();
  const url = "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + id;

  //States
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Def navigate
  const navigate = useNavigate();

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
        <main className="offer-page">
          {/* Left bloc */}
          <div className="offer-left-bloc">
            <img
              src={data?.product_image?.secure_url}
              alt={data.product_description}
            />
          </div>

          {/* Right bloc */}
          <div className="offer-right-bloc">
            <div>
              {/* Price */}
              <p className="offer-price">{data.product_price.toFixed(2)} €</p>

              {/* Details */}
              {data.product_details.map((detail) => {
                const keysInObj = Object.keys(detail);

                return (
                  <div key={keysInObj} className="offer-detail">
                    <div className="offer-detail-keys">{keysInObj}</div>{" "}
                    <div className="offer-detail-values ">
                      {detail[keysInObj]}
                    </div>
                  </div>
                );
              })}

              {/* Product description */}
              <div>
                <p className="offer-name">{data.product_name}</p>
                <p className="offer-description">{data.product_description}</p>
              </div>

              {/* Owner */}
              <div className="offer-owner">
                <img
                  className="offer-owner-image "
                  src={data?.owner?.account?.avatar?.secure_url}
                  alt={data.owner.account.username}
                />
                <p>{data.owner.account.username}</p>
              </div>
            </div>

            {/* Buy ; link to payment page */}
            <button
              onClick={() => {
                navigate("/payment", {
                  state: { name: data.product_name, price: data.product_price },
                });
              }}
            >
              Acheter
            </button>
          </div>
        </main>
      )}
    </>
  );
}

export default Offer;
