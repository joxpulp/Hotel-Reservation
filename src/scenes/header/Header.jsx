import React from "react";
import "./header.css"

export default function Header(props) {
  return (
    <div className="flex-horizontal-center">
      <div className="header-container flex-horizontal-center white-color">
        <div className="header-top yellow-color">
          Hoteles <i className="fad fa-concierge-bell header-icon"></i>
        </div>
        <HeaderSubtitle 
          dateFromState={props.dateFromState}
          dateToState={props.dateToState}
          countryState={props.countryState}
          roomsState={props.roomsState}
          priceState={props.priceState}
          dateFrom={props.dateFrom}
          dateTo={props.dateTo}
        />
      </div>
    </div>
  );
}

function HeaderSubtitle(props) {

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return(
    <div className="header-bottom">
      <p>
        {(props.dateFromState && props.dateToState !== "") || (props.countryState !== "todos" || props.roomsState !== "todos" || props.priceState !== "todos" ) ? 
          (<> Busqueda de hoteles{" "}
              {props.roomsState !== "todos" ? <b>{props.roomsState}</b> : ""}{" "}
              {props.priceState !== "todos" ? props.priceState === "1"? <>de precio <b>economico</b></> : props.priceState === "2"? <>de precio <b>moderado</b></> : props.priceState === "3"? <>de precio <b>caro</b></> : props.priceState === "4"? <>de precio <b>muy caro</b></> : "" : ""}{" "}
              {props.dateFromState !== "" ? (<>desde el <b>{props.dateFrom.toLocaleDateString(undefined, options)}</b></>) : ("")}{" "}
              {props.dateToState !== "" ? (<>hasta el <b>{props.dateTo.toLocaleDateString(undefined, options)}</b></>) : ("")}{" "}
              {props.countryState !== "todos" ? (<>en <b>{props.countryState}</b></>) : ("")}
            </>) : 
          (<>Seleccione <b>algun filtro</b> para verificar la <b>disponibilidad</b></>)}
      </p>
  </div>
  );
}