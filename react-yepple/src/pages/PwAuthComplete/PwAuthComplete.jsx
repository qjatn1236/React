import React from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";

import { PwAuthCompleteTemplates } from "@templates";

export default function PwAuthComplete() {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  const confirmPassword = () => {
    navigate("/login/resetPassword");
  };

  const logoText = "비밀번호 찾기";

  const completeText = {
    completeColorText: "예플",
    completeDescription: "에 가입한 이메일을 입력해주세요",
    completeClass: "completeText",
  };

  const inputProperties = [
    {
      type: "email",
      inputId: "email",
      inputName: "email",
      warningTextClass: "warningText",
    },
  ];

  const linksItem = [
    {
      goTo: "/login/idInquiry",
      goToText: "이메일 찾기 >",
    },
  ];

  const buttonProperties = [
    {
      buttonText: "뒤로",
      className: "whiteButton",
      onClick: onGoBack,
    },
    {
      buttonText: "다음",
      className: "blueButton",
      onClick: confirmPassword,
    },
  ];

  return (
    <>
      <PwAuthCompleteTemplates
        logoText={logoText}
        completeText={completeText}
        linksItem={linksItem}
        buttonProperties={buttonProperties}
        inputProperties={inputProperties}
      />
    </>
  );
}
