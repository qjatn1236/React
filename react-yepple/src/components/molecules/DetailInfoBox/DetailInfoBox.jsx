import React from 'react';
import LabelItem from '@atoms/LabelItem';
import './style.scss';

const DetailInfoBox = (props) => {
  const { infoText } = props;

  return (
    <div className='detailInfoBox'>
      <LabelItem labelText="상세내용"/>
      <div id="infoText" className='infoText' dangerouslySetInnerHTML={{ __html: infoText }} />
    </div>
  );
};

export default DetailInfoBox;