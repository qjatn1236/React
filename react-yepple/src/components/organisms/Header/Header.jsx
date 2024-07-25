import React, { useState } from "react";
import "./style.scss";

import HomeIcon from "/src/assets/images/icon_home_B.svg";
import MainLogo from "/src/assets/images/header_logo.svg";
import MenuIcon from "/src/assets/images/icon_menu_B.svg";
import CloseIcon from "/src/assets/images/icon_close_B.svg";
import LinkItem from "@atoms/LinkItem";
import MenuListBox from "@molecules/MenuListBox";
import HeaderFooterButtonBox from "@molecules/HeaderFooterButtonBox";
import HeaderReservationCont from "@organisms/HeaderReservationCont";

import { Outlet } from "react-router-dom";

export default function Header() {
  // 메뉴 열림 여부
  const [isOpen, setIsOpen] = useState(false);

  // login 여부
  const [isLogin, setIsLogin] = useState(true);

  // logout 함수
  const logOutFn = () => {
    setIsLogin(false);
    setIsOpen(false);
  };

  // 메뉴 리스트
  const menuData = {
    item1: {
      iconSrc: "/src/assets/images/icon_home_B.svg",
      text: "Home",
      link: "/",
    },
    item2: {
      iconSrc: "/src/assets/images/icon_calendar_B.svg",
      text: "캘린더",
      link: "/",
    },
    item3: {
      iconSrc: "/src/assets/images/icon_myResevation_B.svg",
      text: "예약 내역",
      link: "/myreservation",
    },
    item4: {
      iconSrc: "/src/assets/images/icon_mypage_B.svg",
      text: "마이페이지",
      link: "/mypage",
    },
  };

  // 버튼 데이터
  const buttonData = {
    one: {
      text: "변경",
      onClick: () => alert("변경"),
    },
    two: {
      text: "취소",
      onClick: () => alert("취소"),
    },
  };

  // 최근 예약내역 데이터 
  const myReserveData = {
    username: "KIM YS",
    myRoomData: [
      {
        id: 1,
        title: "회의실 A",
        desc: "개발팀 회의",
        bookingDate: "2024.01.10 (수)",
        bookingTime: "13:00 ~ 15:00 (1시간)",
        link: "/myreservation/view",
      },
      {
        id: 2,
        title: "회의실 B",
        desc: "개발팀 회의",
        bookingDate: "2024.01.10 (수)",
        bookingTime: "13:00 ~ 15:00 (1시간)",
        link: "/myreservation/view",
      },
    ],
  };

  return (
    <>
      <div className="headerWrap">
        <div className="defaultArea">
          <LinkItem
            goTo="/"
            goToText={
              <img
                src={isLogin ? MainLogo : HomeIcon}
                alt={isLogin ? "Yepple 로고" : "홈 아이콘"}
                className={isLogin ? "logo" : "home"}
              />
            }
          />
          <img
            src={!isOpen ? MenuIcon : CloseIcon}
            alt={!isOpen ? "메뉴 열기" : "메뉴 닫기"}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* 메뉴 열리는 영역 */}
        {isOpen ? (
          <div className="openArea">
            {/* 메뉴 */}
            <MenuListBox menuData={menuData} />

            {/* 최근 예약 내역 */}
            {isLogin ? (
              <HeaderReservationCont
                myReserveData={myReserveData}
                buttonData={buttonData}
              />
            ) : null}

            {/* 로그인,회원가입 / 로그아웃 버튼영역 */}
            <HeaderFooterButtonBox
              isOpen={isOpen}
              isLogin={isLogin}
              logOutFn={logOutFn}
            />
          </div>
        ) : null}
      </div>

      <Outlet />
    </>
  );
}
