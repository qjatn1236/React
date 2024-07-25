import React from "react";
import RoomTitleBox from "@molecules/RoomTitleBox";
import RoomInfoBox from "@molecules/RoomInfoBox";
import "./style.scss";

const RoomTitleCont = (props) => {
  const { title, time, peopleCnt, favorite } = props;
  return (
    <div className="roomTitleWrap">
      <RoomTitleBox title={title} favorite={favorite}/>
      <RoomInfoBox time={time} peopleCnt={peopleCnt}/>
    </div>
  );
};

export default RoomTitleCont;
