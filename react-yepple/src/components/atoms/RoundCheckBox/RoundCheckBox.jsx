import React from "react";

export default function RoundCheckBox(props) {
  const { inputId, inputName, onchange } = props;

  return (
    <>
      <input onChange={onchange} id={inputId} name={inputName} className="roundCheckBox" type="checkbox" />
    </>
  );
}
