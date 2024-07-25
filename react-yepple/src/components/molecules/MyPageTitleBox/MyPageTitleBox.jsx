import React from 'react';
import TextItem from '@atoms/TextItem';
import ImgItem from '@atoms/ImgItem';
import './style.scss';

const MyPageTitleBox = (props) => {

  const username = props.userData.username;
  const profileImg = props.userData.profileImg;

  return (
    <div className='myPageTitleBox'>
      <ImgItem src={profileImg} alt="프로필아이콘"></ImgItem>
      <TextItem text={username}/>
    </div>
  );
};

export default MyPageTitleBox;