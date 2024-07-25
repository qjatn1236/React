import React from "react";
import CalendarViewTemplates from "@templates/CalendarViewTemplates";

const CalendarView = () => {
  const RoomData = [
    {
      id: 1,
      title: "회의실 A",
      favorite: true,
      bookingStatus: [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false], // 예약시간 값 ,
      btnLink: "/reservation"
    },
    {
      id: 2,
      title: "회의실 B",
      favorite: false,
      bookingStatus: [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false], // 예약시간 값 ,
      btnLink: "/reservation"
    },
    {
      id: 3,
      title: "회의실 C",
      favorite: false,
      bookingStatus: [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false], // 예약시간 값 ,
      btnLink: "/reservation"
    },
  ];

  return (
    <>
      <CalendarViewTemplates RoomData={RoomData} />
    </>
  );
};

export default CalendarView;
