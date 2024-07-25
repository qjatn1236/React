import React from "react";

import { LogoItem, LogoText } from "@atoms";

const LogoBox = (props) => {
  return (
    <div className="logoBox">
      <LogoItem />
      <LogoText logoText={props.logoText} />
    </div>
  );
};

export default LogoBox;
