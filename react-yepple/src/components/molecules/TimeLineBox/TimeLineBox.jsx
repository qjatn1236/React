import React from 'react';
import TimeLineItem from '@atoms/TimeLineItem';
import './style.scss';
import TextItem  from '@atoms/TextItem';

const TimeLineBox = (props) => {
  const { text, active } = props;

  return (
    <div className='timeLineBox'>
      {text === false ? <></> : <TextItem className='text' text={String(text).padStart(2, "0")} />}
      <TimeLineItem active={active} />
    </div>
  );
};

export default TimeLineBox;