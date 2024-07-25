import React from "react";

import { LogoBox, CompleteTextMc, TextInputBox } from "@molecules";
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
export default function ResetPasswordForm(props) {
  const { logoText, completeText, inputProperties } = props;
  return (
    <div className="loginFormBox">
      <LogoBox logoText={logoText} />

      {<CompleteTextMc completeText={completeText} />}

      {inputProperties.map((element, index) => (
        <SetPlaceHolder element={element} key={index} />
      ))}
    </div>
  );
}
