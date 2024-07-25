import React from "react";
import "./style.scss";

import HomeIcon from "/src/assets/images/icon_home_B.svg";
import mainLogo from "/src/assets/images/header_logo.svg";
import HomeMenuIcon from "/src/assets/images/icon_menu_B.svg";

import { Outlet } from "react-router-dom";
import { LinkItem } from "@atoms";

export default function Header() {
  return (
    <>
      <div className="headerWrap">
        {/* <LinkItem to="/" goToText={<img src={HomeIcon} alt="홈 바로가기 아이콘" />} /> */}
        <LinkItem to="/" goToText={<img src={mainLogo} alt="Yepple" />} />
        <img src={HomeMenuIcon} alt="홈 바로가기 아이콘" />
      </div>
      <Outlet />
    </>
  );
}

