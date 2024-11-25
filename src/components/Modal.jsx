/*

* Vinted frontend

* Modal component

*/

//! Pages import
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/login";

function Modal({ setVisible, component, setUserToken, urlToNavigate }) {
  //

  return (
    <div className="modal-root">
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          className="modal-button"
          onClick={() => {
            setVisible(false);
          }}
        >
          X
        </button>
        <div>
          {/* Signup component call */}
          {component === "signup" ? (
            <Signup
              setVisible={setVisible}
              setUserToken={setUserToken}
            ></Signup>
          ) : (
            ""
          )}
          {/* Signup component call */}
          {component === "login" ? (
            <Login
              setVisible={setVisible}
              setUserToken={setUserToken}
              urlToNavigate={urlToNavigate}
            ></Login>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
