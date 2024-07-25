import React from "react";

import { LoginAuthForm, LoginOneButtonOg, LoginTwoButtonOg } from "@organisms";

export default function LoginAuthTemplates(props) {
  const { logoText, completeText, userAccount, linksItem, buttonProperties } = props;

  return (
    <>
      <LoginAuthForm logoText={logoText} completeText={completeText} userAccount={userAccount} linksItem={linksItem} />
      {!Array.isArray(buttonProperties) ? <LoginOneButtonOg buttonProperties={buttonProperties} /> : <LoginTwoButtonOg buttonProperties={buttonProperties} />}
    </>
  );
}
