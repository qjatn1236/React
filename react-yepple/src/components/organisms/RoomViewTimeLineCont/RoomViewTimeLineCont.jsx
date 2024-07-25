import React from 'react';
import TimeLineCont from '@organisms/TimeLineCont';
import LabelIconBox from '@molecules/LabelIconBox';
import './style.scss';

const RoomViewTimeLineCont = (props) => {
  const { bookingStatus, onClick } = props;
  
  return (
    <div className='roomViewTimeLineWrap'>
      <LabelIconBox labelText="예약 현황" imgalt="예약현황페이지 이동 아이콘" onClick={onClick}/>
      <TimeLineCont bookingStatus={bookingStatus} />
    </div>
  );
};

export default RoomViewTimeLineCont;