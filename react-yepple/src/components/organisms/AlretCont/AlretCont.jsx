import React from 'react';
import TextItem  from '@atoms/TextItem';
import AlertButtonBox  from '@molecules/AlertButtonBox';
import './style.scss';

const AlretCont = (props) => {

  const { alretData } = props;


  return (
    <div id="alert" className='alertWrap'>
      <div className='dim'></div>
      <div className='alertArea'>
        <TextItem text={alretData.msg}/>
        <AlertButtonBox buttonData={alretData.buttonData} />
      </div>
    </div>
  );
};

export default AlretCont;