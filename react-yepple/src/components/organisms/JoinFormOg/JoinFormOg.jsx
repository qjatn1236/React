import React from "react";

import { LogoBox, TextInputBox, CompleteTextMc } from "@molecules";

function SetPlaceHolder({ element }) {
  let getPlaceHolder = null;

  const labels = {
    joinemail: "이메일을 입력해주세요",
    joinpw: "비밀번호를 입력해주세요",
    joinrepw: "비밀번호를 다시 입력해주세요",

    newpw: "새 비밀번호를 입력해주세요",
    renewpw: "새 비밀번호를 다시 입력해주세요",
    tel: "휴대폰 번호를 입력해주세요",
    authNumber: "인증번호를 입력해주세요",
  };

  // placeholder가 없는 경우
  if (element.placeholder === undefined) {
    getPlaceHolder = labels[element.inputId] !== undefined ? labels[element.inputId] : null;
  }

  // placeholder가 있고 기존에 만들어진 게 아닐 경우
  // if (element.placeholder !== undefined && element.placeholder.trim() !== "") {
  //   getPlaceHolder = element.placeholder.trim();
  // }

  return <TextInputBox {...element} placeholder={getPlaceHolder} />;
}

export default function JoinFormOg(props) {
  const { logoText, completeText, inputProperties, pwInputProperties } = props;

  return (
    <div className="loginFormBox">
      <LogoBox logoText={logoText} />

      {completeText && <CompleteTextMc completeText={completeText} />}

      {inputProperties.map((element, index) => (
        <SetPlaceHolder element={element} key={index} />
      ))}

      {pwInputProperties.map((element, index) => (
        <SetPlaceHolder element={element} key={index} />
      ))}
    </div>
  );
}
