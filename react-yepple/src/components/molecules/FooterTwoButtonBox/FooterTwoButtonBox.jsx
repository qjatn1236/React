import React from 'react';
import Button from '@atoms/Button';
import './style.scss';

const FooterTwoButtonBox = (props) => {
  const { buttonData } = props;
  
  return (
    <div className='footerTwoButtonBox'>
      <Button buttonText={buttonData.one.text} onClick={buttonData.one.onClick}></Button>
      <Button buttonText={buttonData.two.text} onClick={buttonData.two.onClick}></Button>
    </div>
  );
};

export default FooterTwoButtonBox;