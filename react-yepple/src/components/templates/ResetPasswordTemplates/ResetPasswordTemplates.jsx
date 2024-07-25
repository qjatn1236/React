import React from "react";

import { ResetPasswordForm, LoginTwoButtonOg } from "@organisms";

export default function ResetPasswordTemplates(props) {
  const { logoText, completeText, inputProperties, buttonProperties } = props;

  return (
    <>
      <ResetPasswordForm logoText={logoText} completeText={completeText} inputProperties={inputProperties} />
      <LoginTwoButtonOg buttonProperties={buttonProperties} />
    </>
  );
}
