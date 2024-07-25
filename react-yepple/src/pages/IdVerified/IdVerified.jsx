import React from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";

import { IdVerifiedTemplates } from "@templates";

export default function IdVerified() {
  const navigate = useNavigate();

  const onGoSignIn = () => {
    navigate("/login");
  };

  const logoText = "아이디 찾기";

  const completeText = {
    completeColorText: "예플",
    completeDescription: "에 가입한 이메일은 아래와 같습니다",
    completeClass: "completeText",
  };

  const userAccount = {
    email: "pitapat@gmail.com",
    SignUpDate: "2023.07.15 07:10",
  };

  const linksItem = [
    {
      goTo: "/login/pwInquiry",
      goToText: "비밀번호 찾기 >",
    },
  ];

  const buttonProperties = {
    buttonText: "로그인 하기",
    className: "blueButton",
    onClick: onGoSignIn,
  };

  return (
    <>
      <IdVerifiedTemplates
        logoText={logoText}
        completeText={completeText}
        userAccount={userAccount}
        linksItem={linksItem}
        buttonProperties={buttonProperties}
      />
    </>
  );
}
