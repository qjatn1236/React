import React from 'react';

import StatusInfoBox from '@molecules/StatusInfoBox';
import StatusTimeBox from '@molecules/StatusTimeBox';
import './style.scss';

const StatusInfoCont = () => {

  return (
    <div className='statusInfoWrap'>
      <StatusTimeBox />
      <div className='listArea'>
        <StatusInfoBox />
        <StatusInfoBox />
        <StatusInfoBox />
        <StatusInfoBox />
      </div>
    </div> 
  );
};

export default StatusInfoCont;