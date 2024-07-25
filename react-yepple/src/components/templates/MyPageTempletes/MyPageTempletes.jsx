import React from 'react';
import MyPageTitleBox from '@molecules/MyPageTitleBox';
import MyPageListBox from '@molecules/MyPageListBox';
import './style.scss';

const MyPageTempletes = (props) => {

  return (
    <div className='myPageTemplate'>
      <MyPageTitleBox userData={props.userData} />
      <MyPageListBox menuList={props.menuList}/>
    </div>
  );
};

export default MyPageTempletes;