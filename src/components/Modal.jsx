/*

* Vinted frontend

* Modal component

*/

//! Pages import
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/login";

function Modal({ setVisible, component }) {
  //
  console.log(component);

  return (
    <div className="modal-root">
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {/* button pour fermer la modal */}
        <button
          className="modal-button"
          onClick={() => {
            setVisible(false);
          }}
        >
          X
        </button>
        <div>
          {component === "signup" ? <Signup></Signup> : ""}{" "}
          {component === "login" ? <Login setVisible={setVisible}></Login> : ""}
        </div>
      </div>
    </div>
  );
}

export default Modal;
