import React from 'react';
import IconItem from '@atoms/IconItem';
import TextItem from '@atoms/TextItem';
import './style.scss';

const NavBar = (props) => {
  // pageType : back이면 뒤로가기 아이콘, close면 닫기 아이콘 렌더링
  const { navTitle, pageType } = props;
  return (
    <div className='navBar'>
      <TextItem text={navTitle}/>
      {pageType && pageType == 'back' ?  
        <IconItem className="back" onClick={() => history.back()} src= "/src/assets/images/icon_back_B.svg" alt="뒤로가기" /> 
        :   <IconItem className="close" onClick={() => history.back()} src= "/src/assets/images/icon_close_B.svg" alt="닫기" />}
    </div>
  );
};

export default NavBar;