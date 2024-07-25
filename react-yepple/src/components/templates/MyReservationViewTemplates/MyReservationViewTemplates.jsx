import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomViewTitleCont from '@organisms/RoomViewTitleCont';
import DateSelectCont from '@organisms/DateSelectCont';
import FooterTwoButtonBox from '@molecules/FooterTwoButtonBox';
import NavBar from '@molecules/NavBar';
import ReservationInfoBox from '@molecules/ReservationInfoBox';
import PeopleCont from '@organisms/PeopleCont';
import AlretCont from '@organisms/AlretCont';
import './style.scss';


const MyReservationViewTemplates = (props) => {


  const {title, imgSrc, time, peopleCnt, favorite, desc, bookingDate, bookingTime} = props.myRoomViewData;
  const  peopleData = props.peopleData;
  const navigate = useNavigate();


  // 예약변경 페이지로 이동
  const navigateToEdit = () => {
    navigate("/myreservation/edit");
  }

  // 얼럿 열기
  const alertOpen = () => {
    document.querySelector("#alert").style.display = "block";
  }

  // 얼럿 닫기
  const alertClose = () => {
    document.querySelector("#alert").style.display = "none";
  }


  // footer버튼 데이터
  const buttonData = {
    "one": {
     "text": "예약 취소",
     "onClick": alertOpen,
    },
    "two" : {
      "text": "예약 변경",
      "onClick": navigateToEdit,
    }
  } 
  
  // 얼럿 데이터
  const alretData = {
    "msg" : "예약을 취소하시겠습니까?",
    "buttonData": {
      "one": {
        "text": "취소",
        "onClick": alertClose,
      },
      "two" : {
        "text": "확인",
        "onClick": alertClose,
      }
    }
  }
  
  return (
   <>
      <div className='myReservationViewTemplate'>
        <NavBar navTitle="예약내역" pageType="back"/>
        <RoomViewTitleCont title={title} imgSrc={imgSrc} time={time} peopleCnt={peopleCnt} favorite={favorite} />
        <DateSelectCont labelText="예약날짜" date={bookingDate} />
        <DateSelectCont labelText="예약시간" date={bookingTime} />
        <ReservationInfoBox labelText="예약내용" value={desc} />
        <PeopleCont labelText="참석 인원" peopleData={peopleData}/>
        <FooterTwoButtonBox buttonData={buttonData} />
      </div>
      {/* alert */}
      <AlretCont alretData={alretData}/>
   </>
  );
};

export default MyReservationViewTemplates;