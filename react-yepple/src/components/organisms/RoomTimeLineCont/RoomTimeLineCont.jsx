import React from 'react';
import TextItem from '@atoms/TextItem';
import TimeLineCont from '@organisms/TimeLineCont';
import './style.scss';

const RoomTimeLineCont = (props) => {
  const { bookingStatus } = props;
  
  return (
    <div className='roomTimeLineWrap'>
      <TextItem text="예약 현황"/>
      <TimeLineCont bookingStatus={bookingStatus} />
    </div>
  );
};

export default RoomTimeLineCont;
