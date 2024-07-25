import React from 'react';
import Button from '@atoms/Button';
import './style.scss';

const FooterButtonBox = (props) => {
  const { buttonText, onClick } = props;
  return (
    <div className='footerButtonBox'>
      <Button buttonText={buttonText} onClick={onClick}></Button>
    </div>
  );
};

export default FooterButtonBox;