import React from 'react';
import MyReservationListCont from '@organisms/MyReservationListCont';
import TextItem from './../../atoms/TextItem/index';
import './style.scss';

const HeaderReservationCont = (props) => {

  const { myReserveData, buttonData } = props;

  const username = myReserveData.username;
  const myRoomData = myReserveData.myRoomData;

  return (
    <div className='headerReservationWrap'>
      <div className='titleArea'>
        <TextItem text={username+"님의 최근예약 내역"}/>
        <div className='line'></div>
      </div>
      <MyReservationListCont myRoomData={myRoomData} buttonData={buttonData} />
    </div>
  );
};

export default HeaderReservationCont;