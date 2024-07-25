import React from "react";
import "./style.scss";

import { LoginForm, LoginFooter } from "@organisms";

export default function LoginTemplates(props) {
  const { logoText, inputProperties, keepInfo, FooterProperties } = props;

  return (
    <>
      <LoginForm logoText={logoText} inputProperties={inputProperties} keepInfo={keepInfo} />
      <LoginFooter FooterProperties={FooterProperties} />
    </>
  );
}
