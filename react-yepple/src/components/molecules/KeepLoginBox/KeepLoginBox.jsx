import React from "react";
import { LabelItem, RoundCheckBox } from "@atoms";

export default function KeepLoginBox(props) {
  const { keepInfo } = props;

  return (
    <>
      <RoundCheckBox inputId={keepInfo.inputId} inputName={keepInfo.inputName} onchange={keepInfo.keepFnc} />
      <LabelItem labelForText={keepInfo.labelForText} labelText={keepInfo.labelText} />
    </>
  );
}
