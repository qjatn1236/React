import React from 'react';
import MyReservationEditTemplates from '@templates/MyReservationEditTemplates';

const MyReservationEdit = () => {
  const myRoomViewData = { 
    "id" : 1,
    "title": '회의실 A',
    "imgSrc":'/src/assets/images/room_sample.png',
    "time": '09 ~ 20',
    "peopleCnt": 14,
    "favorite": true,
    "bookingDate" :  "2024.01.10 (수)",
    "bookingTime" : "13:00 ~ 15:00 (1시간)",
    "desc" : "개발팀 회의1",
  };

  const peopleData = ["김길동", "홍나군", "나윤희", "허균", "이하나"];

  return (
    <>
      <MyReservationEditTemplates  myRoomViewData={myRoomViewData} peopleData={peopleData}/>
    </>
  );
};

export default MyReservationEdit;