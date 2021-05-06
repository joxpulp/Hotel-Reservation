import React from "react";
import "./noresult.css"

export default function NoResult() {
  return (
    <div className="no-result-container flex-vertical-center flex-horizontal-center">
      <i className="fad fa-map-marker-question no-result-icon"></i>
      <h3 className="blue-color">No se encontraron resultados disponibles, prueba otro criterio.</h3>
    </div>
  )
}