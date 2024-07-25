import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyReservationListCont from '@organisms/MyReservationListCont';
import AlretCont from '@organisms/AlretCont';
import './style.scss';

const MyReservationTemplates = (props) => {
  const { myRoomData } = props;
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

  // 버튼 데이터
  const buttonData = {
    "one": {
     "text": "변경",
     "onClick": navigateToEdit,
    },
    "two" : {
      "text": "취소",
      "onClick": alertOpen,
    }
  } 
  
  return (
    <>
      <div className='myReservationTemplate'>
        <MyReservationListCont myRoomData={myRoomData} buttonData={buttonData} />
      </div>
      {/* alert */}
      <AlretCont alretData={alretData}/>
    </>
  );
};

export default MyReservationTemplates;