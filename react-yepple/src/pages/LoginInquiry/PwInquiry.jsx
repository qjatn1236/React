import React from "react";
import { LoginSubTemplates } from "@templates";
import { useNavigate } from "react-router-dom";

export default function PwInquiry() {
  const navigate = useNavigate();
  const authNumber = () => {
    navigate("/login/pwAuth");
  };

  const logoText = "비밀번호 찾기";

  const inputProperties = [
    {
      type: "tel",
      inputId: "tel",
      inputName: "tel",
      warningTextItem: "* 본인 명의로 가입한 휴대폰 번호를 입력해주세요",
      warningTextClass: "warningText",
    },
  ];

  const buttonProperties = [
    {
      buttonText: "뒤로",
      className: "whiteButton",
    },
    {
      buttonText: "다음",
      className: "blueButton",
      onClick: authNumber,
    },
  ];

  return (
    <>
      <LoginSubTemplates logoText={logoText} inputProperties={inputProperties} buttonProperties={buttonProperties} />
    </>
  );
}
