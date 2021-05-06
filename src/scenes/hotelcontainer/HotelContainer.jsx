import React from "react";
import HotelInfo from "../hotelinfo/HotelInfo";
import NoResult from "../noresult/NoResult";
import "./hotelcontainer.css"

export default function HotelContainer(props) {
  return (
    <div className="hotel-container">
      {props.hotelCards.length === 0 ? (
        <NoResult />
      ) : (
        <div className="body-container">
          {props.hotelCards.map((hotel) => (
            <HotelInfo
              key={hotel.slug} 
              photo={hotel.photo}
              name={hotel.name}
              description={hotel.description}
              city={hotel.city}
              country={hotel.country}
              rooms={hotel.rooms}
              price={hotel.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}
