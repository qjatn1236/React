import React from 'react';
import DateSelectBox from '@molecules/DateSelectBox';
import TimeButtonBox from '@molecules/TimeButtonBox';
import TimeIconBox from '@molecules/TimeIconBox';
import './style.scss';

const TimeSelectCont = (props) => {

  const {labelText, resevationTime } = props;
  return (
    <div className='timeSelectWrap'>
      <DateSelectBox labelText={labelText} date={resevationTime} />
      <TimeButtonBox />
      <TimeIconBox />
    </div>
  );
};

export default TimeSelectCont;