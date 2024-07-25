import React from "react";

export default function AuthTextItem(props) {
  const { completeText } = props;

  return (
    <>
      <p className={completeText.completeClass}>
        <span>{completeText.completeColorText}</span>
        {completeText.completeDescription}
      </p>
    </>
  );
}
