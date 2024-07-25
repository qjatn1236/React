import React from 'react';
import IconItem from '@atoms/IconItem';
import './style.scss';

const CalendarDateBox = (props) => {
  const { date } = props;

  return (
    <div className='calendarDateBox'>
      <IconItem src="/src/assets/images/icon_back_GR.svg" alt="이전"/>
      <p className='date'>{date}</p>
      <IconItem src="/src/assets/images/icon_next_GR.svg" alt="다음" />
    </div>
  );
};

export default CalendarDateBox;