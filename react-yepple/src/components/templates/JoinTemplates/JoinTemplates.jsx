import React from "react";

import { JoinFormOg, LoginOneButtonOg } from "@organisms";

export default function JoinTemplates(props) {
  const { logoText, inputProperties, pwInputProperties, buttonProperties } = props;

  return (
    <>
      <JoinFormOg logoText={logoText} inputProperties={inputProperties} pwInputProperties={pwInputProperties} />
      <LoginOneButtonOg buttonProperties={buttonProperties} />
    </>
  );
}
