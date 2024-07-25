import React from 'react';
import TextItem from '@atoms/TextItem';
import './style.scss';

const TimeIconBox = () => {
  return (
    <div className='timeIconBox'>
      <div>
        <span className='box active'></span>
        <TextItem text="선택 완료" />
      </div>
      <div>
        <span className='box default'></span>
        <TextItem text="예약 가능" />
      </div>
      <div>
        <span className='box none'></span>
        <TextItem text="불가능" />
      </div>
    </div>
  );
};

export default TimeIconBox;