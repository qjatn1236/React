import React from "react";
import { useNavigate } from "react-router-dom";

import { PhoneNumberInputTemplates } from "@templates";

export default function IdInquiry() {
  const navigate = useNavigate();

  const authNumber = () => {
    if (1 !== 2) {
      navigate("/login/idAuth");
    }
  };

  const onGoBack = () => {
    navigate(-1);
  };

  const logoText = "아이디 찾기";

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
      onClick: onGoBack,
    },
    {
      buttonText: "인증번호 발송",
      className: "blueButton",
      onClick: authNumber,
    },
  ];

  return (
    <>
      <PhoneNumberInputTemplates logoText={logoText} inputProperties={inputProperties} buttonProperties={buttonProperties} />
    </>
  );
}
