import React from 'react';
import NavBar from '@molecules/NavBar';
import RoomTitleCont from '@organisms/RoomTitleCont';
import DateSelectCont from '@organisms/DateSelectCont';
import TimeSelectCont from '@organisms/TimeSelectCont';
import FooterButtonBox from '@molecules/FooterButtonBox';
import ReservationInfoBox from '@molecules/ReservationInfoBox';
import PeopleCont from '@organisms/PeopleCont';
import AlretCont from '@organisms/AlretCont';
import './style.scss';

const ReservationTemplates = (props) => {
  const { title, time, peopleCnt, favorite, date, resevationTime } = props.reservationData;
  const peopleData = props.peopleData;

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
    "msg" : "예약을 하시겠습니까?",
    "buttonData": {
      "one": {
        "text": "취소",
        "onClick": alertClose,
      },
      "two" : {
        "text": "완료",
        "onClick": alertClose,
      }
    }
  }

  return (
    <>
      <div className='reservationTemplate'>
        <NavBar navTitle="예약하기" pageType="close"/>
        <RoomTitleCont title={title} time={time} peopleCnt={peopleCnt} favorite={favorite} />
        <DateSelectCont  labelText="예약 날짜" date={date} />
        <TimeSelectCont labelText="예약 시간" resevationTime={resevationTime} />
        <ReservationInfoBox labelText="예약 내용" placeholder="내용을 입력해주세요" />
        <PeopleCont labelText="인원 선택" peopleData={peopleData} />
        <FooterButtonBox  buttonText="예약완료" onClick={alertOpen} />
      </div>
      {/* alert */}
      <AlretCont alretData={alretData}/>
    </>
  );
};

export default ReservationTemplates;