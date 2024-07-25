import React from "react";

import { PwAuthCompleteForm, LoginTwoButtonOg } from "@organisms";

export default function PwAuthCompleteTemplates(props) {
  const { logoText, completeText, linksItem, buttonProperties, inputProperties } = props;

  return (
    <>
      <PwAuthCompleteForm logoText={logoText} completeText={completeText} linksItem={linksItem} inputProperties={inputProperties} />

      <LoginTwoButtonOg buttonProperties={buttonProperties} />
    </>
  );
}
