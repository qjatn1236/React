import React from "react";
import HomeTemplates from "@templates/HomeTemplates";

const Home = () => {
  /* bookingStatus 값 (예약시간 값)
    30분단위로 0시(0) ~ 23시(47)
  */

  // 회의실 리스트 데이터
  const RoomData = [
    {
      id: 1,
      title: "회의실 A", // 회의실 이름
      imgSrc: "/src/assets/images/room_sample.png", // 이미지 경로
      time: "09 ~ 20", // 운영시간
      peopleCnt: 14, // 가능인원
      favorite: true, // 즐겨찾기 여부
      bookingStatus: [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false], // 예약시간 값 (30분단위로, 0시(0) ~ 23시(47))
      link:"/homeview" // view페이지 링크
    },
    {
      id: 2,
      title: "회의실 B",
      imgSrc: "/src/assets/images/room_sample.png",
      time: "09 ~ 20",
      peopleCnt: 14,
      favorite: false,
      bookingStatus: [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false],
      link:"/homeview"
    },
    {
      id: 3,
      title: "회의실 C",
      imgSrc: "/src/assets/images/room_sample.png",
      time: "09 ~ 20",
      peopleCnt: 14,
      favorite: false,
      bookingStatus: [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false],
      link:"/homeview"
    },
  ];

  return (
    <>
      <HomeTemplates RoomData={RoomData} />
    </>
  );
};

export default Home;
