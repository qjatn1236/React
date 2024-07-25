import React from 'react';
import './style.scss';

const TimeLineItem = (props) => {
  const { active } = props;
  return (
    <>
      <div className={active ? 'timeline active' : 'timeline'}></div>
    </>
  );
};

export default TimeLineItem;