import React from 'react';
import LabelIconBox from '@molecules/LabelIconBox/LabelIconBox';
import PeopleBox from '@molecules/PeopleBox/PeopleBox';
import './style.scss';

const PeopleCont = (props) => {
  const { peopleData, labelText } = props;

  return (
    <div className='peopleWrap'>
      <LabelIconBox labelText={labelText} imgalt={labelText} onClick={() => alert('인원 선택')}/>
      <PeopleBox peopleData={peopleData} />
    </div>
  );
};

export default PeopleCont;