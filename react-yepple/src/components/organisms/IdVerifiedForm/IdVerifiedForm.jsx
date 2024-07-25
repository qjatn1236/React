import React from "react";

import { CompleteTextMc, LinkMc, LogoBox, UserInformation } from "@molecules";

export default function IdVerifiedForm(props) {
  const { logoText, completeText, userAccount, linksItem } = props;
  return (
    <div className="loginFormBox">
      <div className="userAccountBox">
        <LogoBox logoText={logoText} />

        {<CompleteTextMc completeText={completeText} />}

        {<UserInformation userAccount={userAccount} />}

        <LinkMc linksItem={linksItem} />
      </div>
    </div>
  );
}
