import React from 'react';
import LabelItem  from "@atoms/LabelItem";
import TextItem  from "@atoms/TextItem";
import './style.scss'

const RoomInfoBox = (props) => {
  const { time, peopleCnt } = props;
  return (
    <div className="roomInfoBox">
      <div>
        <LabelItem labelText="운영 시간 :"/>
        <TextItem text={time+"시"}/>
      </div>
      <div>
        <LabelItem labelText="가능 인원 :"/>
        <TextItem text={peopleCnt+"명"}/>
      </div>
    </div>
  );
};

export default RoomInfoBox;