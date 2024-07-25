import React from 'react';
import ReservationTemplates from '@templates/ReservationTemplates';

const Reservation = () => {
  const reservationData = {
    "id" : 1,
    "title": '회의실 A',
    "time": '09 ~ 20',
    "peopleCnt": 14,
    "favorite": true,
    "date": '2024.02.22(목)',
    "resevationTime": '11:00 ~ 12:00 (1시간)'
  }

  const peopleData = ["김길동", "홍나군", "나윤희", "허균", "이하나"];
  
  return (
    <>
      <ReservationTemplates reservationData={reservationData} peopleData={peopleData} />
    </>
  );
};

export default Reservation;