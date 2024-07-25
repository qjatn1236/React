import React, { useEffect } from "react";
import "./style.scss";

import { LoginTemplates } from "@templates";

export default function Login() {
  function goLogin() {
    const keepCheckBox = document.getElementById("keepLogin");
    const idValue = document.getElementById("email");
    const pwValue = document.getElementById("pw");

    if (idValue.value === "") {
      alert("이메일을 입력해주세요");
      idValue.focus();
      return false;
    }

    if (pwValue.value === "") {
      alert("비밀번호를 입력해주세요");
      pwValue.focus();
      return false;
    }

    if (keepCheckBox.checked) {
      setCookie("keepEmail", idValue.value, 1);
    }
  }

  useEffect(() => {
    const idValue = document.getElementById("email");
    const inputCookieName = getCookie("keepEmail");
		if(inputCookieName){
    	idValue.value = inputCookieName;
		}
    // idValue.value = inputCookieName;
  }, []);

  function setCookie(name, value, exp) {
    const date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  function getCookie(name) {
    const getCookieName = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    let resultCookie = getCookieName ? getCookieName[2] : null;

    return resultCookie;
  }

  const inputProperties = [
    {
      type: "email",
      inputId: "email",
      inputName: "email",
    },
    {
      type: "password",
      inputId: "pw",
      inputName: "pw",
    },
  ];

  // 로그인 - 아이디저장 속성들
  const keepInfo = {
    inputId: "keepLogin",
    inputName: "keepLogin",
    labelForText: "keepLogin",
    labelText: "아이디 기억하기",
  };

  const buttonProperties = {
    buttonText: "로그인",
    className: "blueButton",
    onClick: goLogin,
  };

  const linksItem = [
    {
      goTo: "idInquiry",
      goToText: "아이디찾기",
    },
    {
      goTo: "pwInquiry",
      goToText: "비밀번호 찾기",
    },
    {
      goTo: "join",
      goToText: "회원가입",
    },
  ];

  return (
    <>
      <LoginTemplates logoText={"예쁘다, 예약 플레이"} inputProperties={inputProperties} keepInfo={keepInfo} FooterProperties={{ buttonProperties, linksItem }} />
    </>
  );
}
