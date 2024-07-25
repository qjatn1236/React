import React from "react";
import MyPageTempletes from "@templates/MyPageTempletes";

const MyPage = () => {
  const userData = {
    "username": "KIM YS",
    "profileImg": "/src/assets/images/icon_profile.svg"
  };

  const menuList = [
    "예약내역",
    "결제내역",
    "즐겨찾기",
    "알림설정",
    "고객센터",
    "공지사항",
    "이용약관",
  ];

  return (
    <>
      <MyPageTempletes userData={userData} menuList={menuList}/>
    </>
  );
};

export default MyPage;
