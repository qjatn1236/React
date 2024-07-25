import React from 'react';
import './style.scss';

const PeopleBox = (props) => {
  const peopleData  = props.peopleData;

  return (
    <div className='peopleBox'>
      {peopleData.map(function(item, index) {
          return (
            <span key={index}>{item}</span> 
          )
        })
      }
    </div>
  );
};

export default PeopleBox;