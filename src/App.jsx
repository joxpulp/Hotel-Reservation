import React, {useState}  from "react";
import {hotelsData} from "./scripts/data";
import Header from "./scenes/header/Header";
import Filters from "./scenes/filters/Filters";
import ModalMessage from "./scenes/modalmessage/ModalMessage";
import HotelContainer from "./scenes/hotelcontainer/HotelContainer";
import "./app.css";

export default function App() {
  
  // ESTADOS GLOBALES DE LOS FILTROS
  const [dateFromState, updatedDateFromState] = useState("");
  const [dateToState, updatedDateToState] = useState("");
  const [countryState, updatedCountryState] = useState("todos");
  const [priceState, updatedPriceState] = useState("todos");
  const [roomsState, updatedRoomsState] = useState("todos");

  // VARIABLES FECHAS FROM Y TO
  const dateFrom = new Date(dateFromState + "T00:00");
  const dateTo = new Date(dateToState + "T00:00");

  // MANEJADORES DE ESTADOS
  const handleDateFrom = (event) => updatedDateFromState(event.target.value);
  const handleDateTo = (event) => updatedDateToState(event.target.value);
  const handleModalMessage = () => updatedDateToState("");
  const handleCountryChange = (value) => updatedCountryState(value);
  const handlePriceChange = (value) => updatedPriceState(value);
  const handleRoomsChange = (value) => updatedRoomsState(value);
  const handleReset = () => {
    updatedDateFromState("");
    updatedDateToState("");
    updatedCountryState("todos");
    updatedPriceState("todos");
    updatedRoomsState("todos");
  };

  // FILTROS DE FECHA (FROM-TO), COUNTRY, PRICE, ROOMS SIZE
  const crearLista = () => {
    let number = parseInt(priceState, 10);
    const listaFiltrada = hotelsData
      .filter((updateCard) =>
        dateFromState && dateToState !== ""
          ? dateFrom.valueOf() >= updateCard.availabilityFrom &&
            dateTo.valueOf() <= updateCard.availabilityTo
          : updateCard
      )
      .filter((updateCard) =>
        countryState !== "todos"
          ? updateCard.country === countryState
          : updateCard
      )
      .filter((updateCard) =>
        priceState !== "todos" ? updateCard.price === number : updateCard
      )
      .filter((updateCard) =>
        roomsState !== "todos"
          ? roomsState === "pequeños"
            ? updateCard.rooms <= 10
            : roomsState === "medianos"
            ? updateCard.rooms > 10 && updateCard.rooms <= 20
            : roomsState === "grandes"
            ? updateCard.rooms > 20
            : updateCard
          : updateCard
      );
    return listaFiltrada;
  };
  let hotelCards = crearLista();

  // RETURN DEL COMPONENTE APP
  return (
    <div className="App">
      <Header
        dateFromState={dateFromState}
        dateFrom={dateFrom}
        dateToState={dateToState}
        dateTo={dateTo}
        countryState={countryState}
        priceState={priceState}
        roomsState={roomsState}
      />
      <Filters
        countryState={countryState}
        priceState={priceState}
        roomsState={roomsState}
        dateFromState={dateFromState}
        dateToState={dateToState}
        handleCountryChange={handleCountryChange}
        handlePriceChange={handlePriceChange}
        handleRoomsChange={handleRoomsChange}
        handleDateFrom={handleDateFrom}
        handleDateTo={handleDateTo}
        handleReset={handleReset}
      />
      {dateFromState && dateToState !== ""? dateToState < dateFromState? <ModalMessage handleModalMessage={handleModalMessage} /> : "" : ""}
      <HotelContainer hotelCards={hotelCards} />
    </div>
  );
}
