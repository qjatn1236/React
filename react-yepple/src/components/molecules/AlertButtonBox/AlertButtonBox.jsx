import React from 'react';
import Button from '@atoms/Button';
import './style.scss';

const AlertButtonBox = (props) => {
  const { buttonData } = props;


  return (
    <div className='alertButtonBox'>
      <Button buttonText={buttonData.one.text} onClick={buttonData.one.onClick}></Button>
      <Button buttonText={buttonData.two.text} onClick={buttonData.two.onClick}></Button>
    </div>
  );
};

export default AlertButtonBox;