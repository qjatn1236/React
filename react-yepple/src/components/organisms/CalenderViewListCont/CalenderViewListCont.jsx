import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@atoms/Button";
import TimeLineCont from "@organisms/TimeLineCont";
import RoomTitleBox from "@molecules/RoomTitleBox";
import './style.scss';

const CalenderViewListCont = (props) => {  
  const RoomData = props.RoomData;
  const navigate = useNavigate();

  return (
    <div className="calenderViewList">
      {RoomData.map(function (item, index) {
        return (
          <div className="calenderViewItem" key={index}>
            <div className="topArea">
              <RoomTitleBox title={item.title} favorite={item.favorite} />
              <Button buttonText="예약" onClick={()=> navigate(item.btnLink)} />
            </div>
            <TimeLineCont bookingStatus={item.bookingStatus}/>
          </div>
        );
      })}
    </div>
  );
};

export default CalenderViewListCont;
