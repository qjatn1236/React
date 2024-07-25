import React from 'react';

import TextItem  from '@atoms/TextItem';
import LabelItem from '@atoms/LabelItem';
import ImgItem  from '@atoms/ImgItem';
import './style.scss';

const StatusInfoBox = () => {
  const title = "주간 회의 및 프로젝트 점검";
  const userName = "김예플";
  const peopleCnt = 2;

  return (
    <div className='statusInfoBox'>
      <div className='leftArea'>
        <TextItem text={title}/>
        <div className='name'>
          <LabelItem labelText="예약자 :"/>
          <TextItem text={userName}/>
        </div>  
      </div>
      <div className='rightArea'>
        <ImgItem src="/src/assets/images/icon_people_GR.svg" alt="사람 아이콘" />
        <TextItem text={peopleCnt}/>
      </div>
    </div>
  );
};

export default StatusInfoBox;