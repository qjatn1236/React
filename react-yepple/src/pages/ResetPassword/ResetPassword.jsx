import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

import { ResetPasswordTemplates } from "@templates";

export default function ResetPassword() {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  const updatePassword = () => {
    alert("로그인 페이지로 이동됩니다.")
    navigate('/login');
  };

  const logoText = "비밀번호 재설정";

  const completeText = {
    completeColorText: "새로운 비밀번호",
    completeDescription: "를 입력해주세요",
    completeClass: "completeText",
  };
  
  const inputProperties = [
    {
      type: "password",
      inputId: "newpw",
      inputName: "newpw",
    },
    {
      type: "password",
      inputId: "renewpw",
      inputName: "renewpw",
      warningTextItem: "* 영문/숫자 /특수문자등 3가지 이상 조합한 6~15자리만 가능합니다.",
      warningTextClass: "warningText warningTextred",
    },
  ];

  const buttonProperties = [
    {
      buttonText: "뒤로",
      className: "whiteButton",
      onClick: onGoBack,
    },
    {
      buttonText: "비밀번호 변경",
      className: "blueButton",
      onClick: updatePassword,
    },
  ];

  return (
    <>
      <ResetPasswordTemplates logoText={logoText} completeText={completeText} buttonProperties={buttonProperties} inputProperties={inputProperties} />
    </>
  );
}
