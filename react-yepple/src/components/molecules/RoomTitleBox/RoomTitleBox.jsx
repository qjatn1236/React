import React, { useState } from 'react';
import TextItem from '@atoms/TextItem';
import IconItem from "@atoms/IconItem";
import "./style.scss"

const RoomTitleBox = (props) => {
  const { title, favorite } = props;
  let [ active, setActive ] = useState(favorite);
  return (
    <div className='roomTitleBox'>
      <TextItem text={title}></TextItem>
      <IconItem onClick={() => setActive(!active)} src={active ? "/src/assets/images/icon_favorite_Y.svg" : "/src/assets/images/icon_favorite_G.svg" } alt="즐겨찾기 아이콘"/>
    </div>
  );
};

export default RoomTitleBox;