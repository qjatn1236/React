import React, { useState } from "react";
import LinkItem from "@atoms/LinkItem";
import './style.scss';

const HeaderFooterButtonBox = (props) => {

  // 메뉴 열림 여부
  const [isOpen, setIsOpen] = useState(props.isOpen);

  // login 여부
  const [isLogin, setIsLogin] = useState(props.isLogin);

  const logOutFn = props.logOutFn;


  return (
    <div className="headerFooterButtonBox">
      {!isLogin ? (
        <>
          <LinkItem
            goTo="/login"
            goToText="로그인"
          />
          <div className="line"></div>
          <LinkItem
            goTo="/login/join"
            goToText="회원가입"
          />
        </>
      ) : (
        <>
          <LinkItem
            goTo="/"
            goToText="로그아웃"
            onClick={logOutFn}
          />
        </>
      )}
    </div>
  );
};

export default HeaderFooterButtonBox;