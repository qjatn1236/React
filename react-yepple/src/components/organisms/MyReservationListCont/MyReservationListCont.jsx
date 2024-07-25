import React from "react";
import MyReservationTitleBox from "@molecules/MyReservationTitleBox";
import MyReservationInfoBox from "@molecules/MyReservationInfoBox";
import "./style.scss";

const MyReservationListCont = (props) => {
  const { myRoomData, buttonData } = props;


  return (
    <div className="myReservationList">
      {myRoomData.map(function (item, index) {
        return (
          <div className="myReservationItem" key={index}>
            <MyReservationTitleBox title={item.title} link={item.link} buttonData={buttonData}/>
            <MyReservationInfoBox  desc={item.desc} bookingDate={item.bookingDate} bookingTime={item.bookingTime} />
          </div>
        );
      })}
    </div>
  );
};

export default MyReservationListCont;
