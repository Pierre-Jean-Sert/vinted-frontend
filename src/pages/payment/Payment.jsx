/*

* Vinted frontend

* Payment page

*/

//! Style import
import "./payment.css";

//! Hook import
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

//! Other import
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";

// Cette ligne permet de vous connecter à votre compte Stripe en fournissant votre clef publique
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

//* PAYMENT FUNCTION
function Payment({
  userToken,
  setUrlToNavigate,
  visible,
  setVisible,
  setComponent,
}) {
  //
  // Def navigate
  const navigate = useNavigate();

  // * Check user connection
  useEffect(() => {
    if (!userToken) {
      navigate("/");
      setUrlToNavigate("/");
      setVisible(!visible);
      setComponent("login");
    }
  }, [userToken]);

  //
  const deliveryCost = 2;
  const buyerWarranty = 1;

  // Location require
  const location = useLocation();
  const { name, price } = location.state;

  //Total
  const total = Number(price) + deliveryCost + buyerWarranty;

  const options = {
    mode: "payment",
    title: name,
    amount: total * 100,
    currency: "eur",
  };

  return (
    // Le composant Elements doit contenir toute notre logique de paiement
    // On lui donner la preuve que nous sommes connectés et les options de paiement

    <main className="pay-main">
      {/* Command details */}

      <div className="pay-section">
        <h2 className="pay-h2">Résumé de la commande</h2>
        <section className="pay-section1">
          <div>
            <p>Commande</p>
            <p>{price} €</p>
          </div>

          <div>
            <p>Frais protection acheteurs</p>
            <p>{buyerWarranty} €</p>
          </div>

          <div>
            <p>Frais de port</p>
            <p>{deliveryCost} €</p>
          </div>
        </section>

        <section className="pay-section2">
          <div className="pay-total">
            <p>Total</p>
            <p>{total} €</p>
          </div>

          <div>
            <p>
              Il ne vous reste plus qu'un étape pour vous offrir{" "}
              <span className="pay-total">{name}</span>. Vous allez payer{" "}
              <span className="pay-total">{total} €</span> (frais de protection
              et frais de port inclus).
            </p>
          </div>
        </section>

        <div>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm title={name} amount={total} />
          </Elements>
        </div>
      </div>
    </main>
  );
}

export default Payment;
