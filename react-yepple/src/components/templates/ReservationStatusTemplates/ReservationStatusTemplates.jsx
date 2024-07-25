import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '@molecules/NavBar';
import FooterButtonBox from '@molecules/FooterButtonBox';
import CalendarDateBox from '@molecules/CalendarDateBox';
import StatusInfoCont from '@organisms/StatusInfoCont';
import './style.scss';


const ReservationStatusTemplates = (props) => {
  
  const navigate = useNavigate();
  
  // 예약하기 페이지로 이동
  const navigateToReservation = () => {
    navigate("/reservation");
  }

  return (
    <div className='reservationStatusTemplate'>
      <NavBar navTitle="예약 현황" pageType="back"/>
      <CalendarDateBox date="2024.02.29"/>
      <StatusInfoCont />
      <FooterButtonBox buttonText="예약하기" onClick={navigateToReservation}/>
    </div>
  );
};

export default ReservationStatusTemplates;













