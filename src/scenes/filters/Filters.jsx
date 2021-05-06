import React from "react";
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css'
import "./filters.css"

const {Option} = Select;

export default function Filters(props) {
  const todayDate = new Date().toLocaleDateString("en-CA");

  return (
    <div className="flex-horizontal-center">
      <div className="filters-container flex-vertical-center ">
        <div className="date-container-from">
          <input
          value={props.dateFromState}
          onChange={props.handleDateFrom}
          min={todayDate}
          max={props.dateToState === "" ? "" : props.dateToState}
          className="date-styles white-color"
          type="date"
          />
        </div>
        <div className="date-container-to">
          <input
            value={props.dateToState}
            onChange={props.handleDateTo}
            className="date-styles white-color"
            type="date"
          />
         </div>
        <div className="select-container flex-vertical-center">
          <i className="fad fa-globe filter-icons"></i>
          <Select
            name="country"
            value={props.countryState}
            onChange={props.handleCountryChange}
          >
            <Option value="todos">Todos los paises</Option>
            <Option value="Argentina">Argentina</Option>
            <Option value="Brasil">Brasil</Option>
            <Option value="Chile">Chile</Option>
            <Option value="Uruguay">Uruguay</Option>
          </Select>
        </div>
        <div className="select-container flex-vertical-center">
          <i className="fas fa-dollar-sign filter-icons"></i>
          <Select
            name="price"
            value={props.priceState}
            onChange={props.handlePriceChange}
          >
            <Option value="todos">Cualquier Precio</Option>
            <Option value="1">Economico ($)</Option>
            <Option value="2">Moderado ($$)</Option>
            <Option value="3">Caro ($$$)</Option>
            <Option value="4">Muy Caro ($$$$)</Option>
          </Select>
        </div>
        <div className="select-container flex-vertical-center">
          <i className="fas fa-bed filter-icons"></i>
          <Select
            name="hotel-size"
            value={props.roomsState}
            onChange={props.handleRoomsChange}
          >
            <Option value="todos">Cualquier Tamaño</Option>
            <Option value="pequeños">Hotel Pequeño</Option>
            <Option value="medianos">Hotel Mediano</Option>
            <Option value="grandes">Hotel Grande</Option>
          </Select>
        </div>
        <button onClick={props.handleReset} className="btn-reset blue-color ">
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
}
