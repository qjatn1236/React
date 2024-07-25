import React from 'react';
import HomeViewTemplates from '@templates/HomeViewTemplates';

const HomeView = () => {
  const RoomViewData = { 
    "id" : 1,
    "title": '회의실 A',
    "imgSrc":'/src/assets/images/room_sample.png',
    "time": '09 ~ 20',
    "peopleCnt": 14,
    "favorite": true,
    "bookingStatus": [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false], // 예약시간 값 (30분단위로, 0시(0) ~ 23시(47))
    "infoText": '시설 이용 시 주의 사항 <br> &nbsp; · 전 시설 금연 <br>&nbsp; · 마감전에',
    "date": '2024.02.22(목)'
  };
  
  return (
    <>
      <HomeViewTemplates RoomViewData={RoomViewData}/>
    </>
  );
};

export default HomeView;