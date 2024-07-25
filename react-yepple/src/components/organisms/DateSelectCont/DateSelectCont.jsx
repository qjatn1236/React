import React from 'react';
import DateSelectBox from '@molecules/DateSelectBox';
import IconItem from '@atoms/IconItem';
import './style.scss';

const DateSelectCont = (props) => {
  const { labelText, date } = props;
  
  return (
    <div className='dateSelectWrap'>
      <DateSelectBox labelText={labelText} date={date} />
      <IconItem src="/src/assets/images/icon_next_GR.svg" alt="날짜 선택하기 아이콘" onClick={ () => alert('날짜선택 팝업띄우기')} />
    </div>
  );
};

export default DateSelectCont;