import React from "react";
import MyReservationTemplates from "@templates/MyReservationTemplates";

const MyReservation = () => {
  const myRoomData = [
    {
      id: 1,
      title: "회의실 A",
      desc: "개발팀 회의",
      bookingDate: "2024.01.10 (수)",
      bookingTime: "13:00 ~ 15:00 (1시간)",
      link: "view",
    },
    {
      id: 2,
      title: "회의실 B",
      desc: "개발팀 회의",
      bookingDate: "2024.01.10 (수)",
      bookingTime: "13:00 ~ 15:00 (1시간)",
      link: "view",
    },
    {
      id: 3,
      title: "회의실 C",
      desc: "개발팀 회의",
      bookingDate: "2024.01.10 (수)",
      bookingTime: "13:00 ~ 15:00 (1시간)",
      link: "view",
    },
  ];

  return (
    <>
      <MyReservationTemplates myRoomData={myRoomData} />
    </>
  );
};

export default MyReservation;
