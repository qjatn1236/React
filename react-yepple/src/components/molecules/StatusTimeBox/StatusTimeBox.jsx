import React from 'react';
import TextItem from '@atoms/TextItem';
import './style.scss';

const StatusTimeBox = () => {

  /* 09~ 19까지 텍스트 뿌려주기 */
  const renderTextItem = () => {
    const items = [];
    for (let i = 0; i < 24; i++) {
      if (i >= 0 && i < 10) {
        items.push(
          <div className='timeItem' key={i}>
            <TextItem  text={'0'+(i)} />
            <div className='lineArea'>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </div>
        );
      } else {
        /* 23시(마지막타임이면 line 1개 */
        if ( i == 23) {
          items.push(
            <div className='timeItem' key={i}>
              <TextItem  text={i} />
              <div className='lineArea'>
                <div className='line'></div>
              </div>
            </div>
          );
        }
        else {
          items.push(
            <div className='timeItem' key={i}>
              <TextItem  text={i} />
              <div className='lineArea'>
                <div className='line'></div>
                <div className='line'></div>
              </div>
            </div>
          );
        }
      }
    }

    return items;
  };

  return (
    <div className='statusTimeBox'>
      {renderTextItem()}
    </div>
  );
};

export default StatusTimeBox;