import React from "react";
import "./hotelinfo.css"

export default function HotelInfo(props) {
  return (
    <div>
      <div className="card-container">
        <div className="card-top">
          <img className="hotel-images" src={props.photo} alt="hotel-pictures"/>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-info">
            <h2 className="hotel-text grey-dark">{props.name}</h2>
            <p className="hotel-text grey-light">{props.description}</p>
            <div className="location-container flex flex-vertical-center">
              <div className="icon-box yellow-color flex-vertical-center flex-horizontal-center ">
                <i className="fas fa-map-marker-smile"></i>
              </div>
              <p className="location-text-container flex-vertical-center grey-light">
                {props.city}, {props.country}
              </p>
            </div>
            <div className="rooms-price-container flex">
              <div className="rooms-container flex flex-vertical-center">
                <div className="icon-box yellow-color flex-vertical-center flex-horizontal-center">
                  <i className="fas fa-bed"></i>
                </div>
                <p className="location-text-container grey-light">{props.rooms} Habitaciones</p>
              </div>
              <div className="price-container flex-vertical-center flex-horizontal-center">
                <i className={`far fa-dollar-sign dollar-icons ${props.price >= 1? 'yellow-color': 'white-opaque'}`}></i>
                <i className={`far fa-dollar-sign dollar-icons ${props.price >= 2? 'yellow-color': 'white-opaque'}`}></i>
                <i className={`far fa-dollar-sign dollar-icons ${props.price >= 3? 'yellow-color': 'white-opaque'}`}></i> 
                <i className={`far fa-dollar-sign dollar-icons ${props.price >= 4? 'yellow-color': 'white-opaque'}`}></i>
              </div>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-book blue-color">Reservar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
