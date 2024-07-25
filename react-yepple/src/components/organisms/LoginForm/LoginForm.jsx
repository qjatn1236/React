import React from "react";
import "./style.scss";

import { LogoBox, KeepLoginBox, TextInputBox } from "@molecules";

function SetPlaceHolder({ element }) {
  let getPlaceHolder = null;

  const labels = {
    email: "이메일을 입력해주세요",
    password: "비밀번호를 입력해주세요",
  };

  // placeholder가 없는 경우
  if (element.placeholder === undefined) {
    getPlaceHolder = labels[element.type] !== undefined ? labels[element.type] : null;
  }

  // placeholder가 있고 기존에 만들어진 게 아닐 경우
  // if (element.placeholder !== undefined && element.placeholder.trim() !== "") {
  //   getPlaceHolder = element.placeholder.trim();
  // }

  return <TextInputBox {...element} placeholder={getPlaceHolder} />;
}

export default function LoginForm(props) {
  const { keepInfo, logoText, inputProperties } = props;
	
  return (
    <div className="loginFormBox">
      <LogoBox logoText={logoText} />

      <div className="loginInputBox">
        {inputProperties.map((element, index) => (
          <SetPlaceHolder element={element} key={index} />
        ))}
      </div>

      <KeepLoginBox keepInfo={keepInfo} />
    </div>
  );
}
