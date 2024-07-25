import React from "react";

import { InputItem, WarningTextItem } from "@atoms";

export default function TextInputBox(props) {
	
  return (
    <>
      <InputItem {...props} />
      {props.warningTextItem && <WarningTextItem {...props} />}
    </>
  );
}
