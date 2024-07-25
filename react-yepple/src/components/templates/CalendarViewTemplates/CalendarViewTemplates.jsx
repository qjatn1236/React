import React from 'react';
import CalenderViewListCont from '@organisms/CalenderViewListCont';
import './style.scss';

const CalendarViewTemplates = (props) => {

  return (
    <div className='calendarViewTemplate'>
      <CalenderViewListCont RoomData={props.RoomData} />
    </div>
  );
};

export default CalendarViewTemplates;