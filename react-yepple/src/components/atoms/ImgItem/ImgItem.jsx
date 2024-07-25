import React from 'react';

const ImgItem = (props) => {
  const {className, src, alt} = props;
  return (
    <>
      <img className={className} src={src} alt={alt} />
    </>
  );
};

export default ImgItem;