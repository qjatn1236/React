import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import { LoginCountTemplates } from "@templates";

export default function PwAuth() {
  const navigate = useNavigate();
  const authCheck = () => {
    navigate("/login/pwAuthComplete");
  };

  const logoText = "비밀번호 찾기";

  const inputProperties = [
    {
      type: "tel",
      inputId: "authNumber",
      inputName: "authNumber",
      warningTextItem: "* 문자로 받은 6자리 인증번호를 입력해주세요.",
      warningTextClass: "warningText",
      timeOut: true,
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
