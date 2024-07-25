import React from "react";

import { AuthTextItem, LinkItem } from "@atoms";
import { LogoBox, UserInformation } from "@molecules";

export default function LoginAuthForm(props) {
  const { logoText, completeText, userAccount, linksItem } = props;
  return (
    <div className="loginFormBox">
      <div className="userAccountBox">
        <LogoBox logoText={logoText} />

        {<AuthTextItem completeText={completeText} />}

        {userAccount && <UserInformation userAccount={userAccount} />}

        {linksItem.map((elements, index) => (
          <LinkItem goTo={elements.goTo} goToText={elements.goToText} key={index} />
        ))}
      </div>
    </div>
  );
}
