import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Header from "@organisms/Header";
import HomeView from "@pages/HomeView";
import Reservation from "@pages/Reservation";
import ReservationStatus from "@pages/ReservationStatus";
import CalendarView from "@pages/CalendarView";
import MyReservation from "@pages/MyReservation";
import MyReservationView from "@pages/MyReservationView";
import MyReservationEdit from "@pages/MyReservationEdit";
import MyPage from "@pages/MyPage";

import { Home, Login, Join, IdInquiry, IdAuth, IdVerified, PwInquiry, PwAuth, PwAuthComplete, ResetPassword, BookingHistory } from "@pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <div>오류</div>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "login",
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "join",
            element: <Join />,
          },
          {
            path: "idInquiry",
            element: <IdInquiry />,
          },
          {
            path: "idAuth",
            element: <IdAuth />,
          },
          {
            path: "idVerified",
            element: <IdVerified />,
          },
          {
            path: "pwInquiry",
            element: <PwInquiry />,
          },
          {
            path: "pwAuth",
            element: <PwAuth />,
          },
          {
            path: "pwAuthComplete",
            element: <PwAuthComplete />,
          },
          {
            path: "resetPassword",
            element: <ResetPassword />,
          },
        ],
      },
      {
        /* 캘린더 상세 */
        path: "calendarview",
        element: <CalendarView />,
      },
      {
        /* 예약내역 */
        path: "myreservation",
        element: <MyReservation />,
      },
      {
        /* 마이페이지 */
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "bookingHistory",
        element: <BookingHistory />,
      },
    ],
  },
  {
    /* 홈 상세 */
    path: "homeview",
    element: <HomeView />,
    errorElement: <div>오류</div>,
  },
  {
    /* 예약하기 */
    path: "reservation",
    element: <Reservation />,
    errorElement: <div>오류</div>,
  },
  {
    /* 예약현황 */
    path: "reservationstatus",
    element: <ReservationStatus />,
    errorElement: <div>오류</div>,
  },
  {
    /* 예약내역 상세 */
    path: "myreservation/view",
    element: <MyReservationView />,
    errorElement: <div>오류</div>,
  },
  {
    /* 예약내역 수정 */
    path: "myreservation/edit",
    element: <MyReservationEdit />,
    errorElement: <div>오류</div>,
  },
]);

export default router;
