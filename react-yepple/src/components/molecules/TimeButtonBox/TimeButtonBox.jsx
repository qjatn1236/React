import React, { useState } from 'react';

import Button from '@atoms/Button';
import TextItem from '@atoms/TextItem';
import './style.scss';

const TimeButtonBox = () => {
  const renderTimeButtonItems = () => {
    const items = [];
    /* button 스타일에 따른 클래스 ( 기본값 : 예약가능, active: 선택완료, none: 불가능 )*/
    for (let i = 0; i < 20; i++) {
      items.push(<Button key={i}  />);
    }

    return items;
  };

  const renderTextItem = () => {
    const items = [];
    for (let i = 0; i < 11; i++) {
      if (i == 0) {
        items.push(<TextItem key={i} text={'0'+(9+i)} />);
      } else {
        items.push(<TextItem key={i} text={9+i} />);
      }
    }

    return items;
  };


  return (
    <div className='timeButtonBox'>
      <div className='textArea'> 
        {renderTextItem()}
      </div>
      <div className='buttonArea'>
        {renderTimeButtonItems()}
      </div>
    </div>
  );
};

export default TimeButtonBox;