import React from 'react';
import HomeRoomList from "@organisms/HomeRoomList";
import CopyRight from '@molecules/CopyRight';
import './style.scss';

const HomeTemplates = (props) => {
  const RoomData = props.RoomData;
  return(
    <div className='homeTemplate'>
      <HomeRoomList RoomData={RoomData} />
      <CopyRight />
    </div>
  )
};

export default HomeTemplates;
