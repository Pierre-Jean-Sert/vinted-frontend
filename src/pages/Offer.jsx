/*

* Vinted frontend

* Offer page

*/

//! Hooks import
import { useParams } from "react-router-dom";

//* OFFER FUNCTION
function Offer() {
  const { id } = useParams();

  return <section>Je suis l'offre {id}</section>;
}

export default Offer;
