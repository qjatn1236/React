import React from 'react';
import './style.scss';

const IconItem = (props) => {
  const {className, onClick, src, alt} = props;

  return (
    <button className={className} onClick={onClick}>
      <img src={src} alt={alt}/>
    </button>
  );
};

export default IconItem;