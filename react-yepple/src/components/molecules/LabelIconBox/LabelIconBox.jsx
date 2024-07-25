import React from 'react';
import LabelItem from '@atoms/LabelItem';
import IconItem from './../../atoms/IconItem/index';
import './style.scss';

const LabelIconBox = (props) => {
  const {labelText, imgalt, onClick} = props;
  return (
    <div className='labelIconBox'>
      <LabelItem labelText={labelText}/>
      <IconItem src="/src/assets/images/icon_next_GR.svg" alt={imgalt} onClick={onClick} />
    </div>
  );
};

export default LabelIconBox;