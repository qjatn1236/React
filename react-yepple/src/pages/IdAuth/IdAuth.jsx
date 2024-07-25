import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

import { LoginCountTemplates } from "@templates";

export default function IdAuth() {
  const navigate = useNavigate();

  const authCheck = () => {
    if (1 !== 2) {
      navigate("/login/idVerified");
    }
  };

  const reSend = () => {
    console.log("인증번호 재발송");
  };

  const logoText = "아이디 찾기";

  const inputProperties = [
    {
      type: "tel",
      inputId: "authNumber",
      inputName: "authNumber",
      warningTextItem: "* 문자로 받은 6자리 인증번호를 입력해주세요.",
      warningTextClass: "warningText",
      timeOut: true,
      onClick: reSend,
    },
  ];

  const buttonProperties = [
    {
      buttonText: "인증번호 다시발송",
      className: "whiteButton",
    },
    {
      buttonText: "인증번호 확인",
      className: "blueButton",
      onClick: authCheck,
    },
  ];

  return (
    <>
      <LoginCountTemplates logoText={logoText} inputProperties={inputProperties} buttonProperties={buttonProperties} />
    </>
  );
}
