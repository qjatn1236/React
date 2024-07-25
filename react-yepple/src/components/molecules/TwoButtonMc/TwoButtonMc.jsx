import React from "react";
import { Button } from "@atoms";

export default function TwoButtonMc(props) {
  const { buttonProperties } = props;

  return (
    <>
      {buttonProperties.map((elements, index) => (
        <Button onClick={elements.onClick} buttonText={elements.buttonText} className={elements.className} key={index} />
      ))}
    </>
  );
}
