import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);
  //Nested function
  function deleteHandler() {
    //Render a modal and overlay
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {showModal && (
          <>
            <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
            <Backdrop onCancel={closeModalHandler} />
          </>
        )}
      </div>
    </>
  );
}
export default Todo;
