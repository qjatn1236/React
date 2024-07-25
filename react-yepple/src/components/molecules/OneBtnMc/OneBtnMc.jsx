import React from "react";
import { Button } from "@atoms";

export default function OneBtnMc(props) {
  const { buttonProperties } = props;

  return (
    <>
      <Button onClick={buttonProperties.onClick} buttonText={buttonProperties.buttonText} className={buttonProperties.className} />
    </>
  );
}
