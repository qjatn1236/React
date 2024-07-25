import React from "react";

export default function WarningTextItem(props) {
  const { warningTextClass, warningTextItem } = props;

  return (
    <>
      <p className={warningTextClass}>{warningTextItem}</p>
    </>
  );
}
