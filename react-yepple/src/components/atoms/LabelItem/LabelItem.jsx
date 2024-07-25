import React from "react";

export default function LabelItem(props) {
  const { labelForText, labelText } = props;
  return (
    <>
      <label htmlFor={labelForText}>{labelText}</label>
    </>
  );
}
