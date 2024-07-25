import React from "react";

import { PhoneNumberInputForm, LoginTwoButtonOg } from "@organisms";

export default function PhoneNumberInputTemplates(props) {
  const { logoText, inputProperties, buttonProperties } = props;

  return (
    <>
      <PhoneNumberInputForm logoText={logoText} inputProperties={inputProperties} />
      <LoginTwoButtonOg buttonProperties={buttonProperties} />
    </>
  );
}
