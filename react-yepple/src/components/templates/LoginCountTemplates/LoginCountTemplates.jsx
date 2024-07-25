import React from "react";

import { CountInputOg, LoginTwoButtonOg } from "@organisms";

export default function LoginCountTemplates(props) {
  const { logoText, inputProperties, buttonProperties } = props;

  return (
    <>
      <CountInputOg logoText={logoText} inputProperties={inputProperties} />
      <LoginTwoButtonOg buttonProperties={buttonProperties} />
    </>
  );
}

