import React from "react";

import { LoginSubForm, LoginOneButtonOg, LoginTwoButtonOg } from "@organisms";

export default function LoginSubTemplates(props) {
  const { logoText, completeText, inputProperties, buttonProperties } = props;

  return (
    <>
      <LoginSubForm logoText={logoText} completeText={completeText} inputProperties={inputProperties} />
      {!Array.isArray(buttonProperties) ? <LoginOneButtonOg buttonProperties={buttonProperties} /> : <LoginTwoButtonOg buttonProperties={buttonProperties} />}
    </>
  );
}
