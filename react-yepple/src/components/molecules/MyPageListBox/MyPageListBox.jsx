import React from 'react';
import LinkItem from '@atoms/LinkItem';
import './style.scss';

const MyPageListBox = (props) => {

  const menuList = props.menuList;

  return (
    <div className='myPageListBox'>
      {
        menuList.map(function(item, index){
          return(
            <LinkItem key={index} goToText={item} />
          )
        })
      }
    </div>
  );
};

export default MyPageListBox;