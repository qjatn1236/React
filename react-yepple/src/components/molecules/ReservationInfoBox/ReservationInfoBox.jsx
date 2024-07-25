import React from 'react';
import LabelItem from '@atoms/LabelItem';
import InputItem from '@atoms/InputItem';
import './style.scss';

const ReservationInfoBox = (props) => {

  const { labelText, placeholder, value } = props
  return (
    <div className='reservationInfoBox'>
      <LabelItem labelText={labelText}/>
      <InputItem type="text" placeholder={placeholder} value={value} />
    </div>
  );
};

export default ReservationInfoBox;