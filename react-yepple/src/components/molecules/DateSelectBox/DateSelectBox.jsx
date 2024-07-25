import React from 'react';
import LabelItem from '@atoms/LabelItem';
import TextItem from '@atoms/TextItem';
import './style.scss';

const DateSelectBox = (props) => {
  const { labelText, date } = props;

  return (
    <div className='dateSelectBox'>
      <LabelItem labelText={labelText}/>
      <TextItem text={date} />
    </div>
  );
};

export default DateSelectBox;