import React from "react";
import DatePicker from "react-datepicker";

const NeoWsSearch = ({
    startDate,
    endDate,
    startDateChangeHandler,
    endDateChangeHandler,
    onClickHandler
}) => {
    return (
          <div className={`container-fluid text-center text-white font-style: gras`}>
            Start date 
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              className="uk-input"
              onChange={startDateChangeHandler}
              // ici onChange est équivalent à :
              // onChange={function(date) {
              //    setStartDate(date);
              // }}
            />
            End date 
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={endDate}
              className="uk-input"
              onChange={endDateChangeHandler}
            />
            <button className="uk-button uk-button-danger font-style: gras" onClick={onClickHandler}>
              SEARCH
            </button>
          </div>
      );
};

export default NeoWsSearch;