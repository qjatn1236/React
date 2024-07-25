import React from 'react';
import RoomViewTitleCont from '@organisms/RoomViewTitleCont';
import DateSelectCont from '@organisms/DateSelectCont';
import TimeSelectCont from '@organisms/TimeSelectCont';
import FooterButtonBox from '@molecules/FooterButtonBox';
import NavBar from '@molecules/NavBar';
import ReservationInfoBox from '@molecules/ReservationInfoBox';
import PeopleCont from '@organisms/PeopleCont';
import AlretCont from '@organisms/AlretCont';
import './style.scss';

const MyReservationEditTemplates = (props) => {

  const {title, imgSrc, time, peopleCnt, favorite, bookingDate, bookingTime} = props.myRoomViewData;
  const  peopleData = props.peopleData;

  // 얼럿 열기
  const alertOpen = () => {
    document.querySelector("#alert").style.display = "block";
  }

  // 얼럿 닫기
  const alertClose = () => {
    document.querySelector("#alert").style.display = "none";
  }
  
  // 얼럿 데이터
  const alretData = {
    "msg" : "예약을 변경하시겠습니까?",
    "buttonData": {
      "one": {
        "text": "취소",
        "onClick": alertClose,
      },
      "two" : {
        "text": "변경",
        "onClick": alertClose,
      }
    }
  }

  return (
    <>
      <div className='myReservationEditTemplate'>
        <NavBar navTitle="예약변경" pageType="close"/>
        <RoomViewTitleCont title={title} imgSrc={imgSrc} time={time} peopleCnt={peopleCnt} favorite={favorite} />
        <DateSelectCont labelText="예약날짜" date={bookingDate} />
        <TimeSelectCont labelText="예약시간" resevationTime={bookingTime} />
        <ReservationInfoBox labelText="예약내용" placeholder="내용을 입력해주세요" />
        <PeopleCont labelText="인원 선택" peopleData={peopleData}/>
        <FooterButtonBox buttonText="변경완료" onClick={alertOpen} />
      </div>
      {/* alert */}
      <AlretCont alretData={alretData}/>
    </>
  );
};

export default MyReservationEditTemplates;