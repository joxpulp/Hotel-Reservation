import React from "react";
import "./modalmessage.css"

export default function ModalMessage(props) {
  return (
    <div className="modal-message-body">
      <div className="modal-message-container">
        <h3 className="white-color">No puedes seleccionar una fecha de salida menor a la fecha de entrada, vuelve a intentar con una fecha mayor :)</h3>
        <button className="btn-reset btn-modal" onClick={props.handleModalMessage}>OK</button>
      </div>
    </div>
  )
}