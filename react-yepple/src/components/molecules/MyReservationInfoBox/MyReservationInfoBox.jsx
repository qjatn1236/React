import React from "react";
import TextItem from "@atoms/TextItem";
import "./style.scss";

const MyReservationInfoBox = (props) => {

  const { desc, bookingDate, bookingTime } = props;

  return (
    <div className="myReservationInfoBox">
      <TextItem className="title" text={desc} />
      <div>
        <TextItem className="date" text={bookingDate} />
        <TextItem className="time" text={bookingTime}/>
      </div>
    </div>
  );
};

export default MyReservationInfoBox;
