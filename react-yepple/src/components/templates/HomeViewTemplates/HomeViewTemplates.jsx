import React from 'react';
import { useNavigate } from 'react-router-dom';

import RoomViewTitleCont from '@organisms/RoomViewTitleCont';
import RoomViewTimeLineCont from '@organisms/RoomViewTimeLineCont';
import DetailInfoBox from '@molecules/DetailInfoBox';
import DateSelectCont from '@organisms/DateSelectCont';
import FooterButtonBox from '@molecules/FooterButtonBox';
import NavBar from '@molecules/NavBar';
import './style.scss';


const HomeViewTemplates = (props) => {

  const navigate = useNavigate();

  // 예약하기 페이지로 이동
  const navigateToReservation = () => {
    navigate("/reservation");
  }

  // 예약현황 페이지로 이동
  const navigateToReservationStatus = () => {
    navigate("/reservationstatus");
  }

  const {title, imgSrc, time, peopleCnt, favorite, bookingStatus, infoText, date} = props.RoomViewData;

  return (
    <div className='homeViewTemplate'>
      {/* pageType : back이면 뒤로가기 아이콘, close면 닫기 아이콘 렌더링 */}
      <NavBar navTitle="상세보기" pageType="back"/>   
      <RoomViewTitleCont title={title} imgSrc={imgSrc} time={time} peopleCnt={peopleCnt} favorite={favorite} />
      <DetailInfoBox infoText={infoText} />
      <DateSelectCont labelText="날짜 선택" date={date} />
      <RoomViewTimeLineCont bookingStatus={bookingStatus} onClick={navigateToReservationStatus} />
      <FooterButtonBox buttonText="예약하기" onClick={navigateToReservation}/>
    </div>
  );
};

export default HomeViewTemplates;