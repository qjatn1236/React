import React from 'react';
import TimeLineBox from '@molecules/TimeLineBox';
import './style.scss';

const TimeLineCont = (props) => {
  const { bookingStatus } = props;

  return (
    <div className='scroll'>
      <div className='timeLineWrap'>
        { bookingStatus.map((value, index) => (
          <TimeLineBox key={index} active={!value} text={index % 2 == 0 ? index / 2 : false}/>
        ))}
      </div>
    </div>
  );
};

export default TimeLineCont;