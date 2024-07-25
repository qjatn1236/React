import React from "react";

import { IdVerifiedForm, LoginOneButtonOg } from "@organisms";

export default function IdVerifiedTemplates(props) {
  const { logoText, completeText, userAccount, linksItem, buttonProperties } = props;

  return (
    <>
      <IdVerifiedForm logoText={logoText} completeText={completeText} userAccount={userAccount} linksItem={linksItem} />

      <LoginOneButtonOg buttonProperties={buttonProperties} />
    </>
  );
}
