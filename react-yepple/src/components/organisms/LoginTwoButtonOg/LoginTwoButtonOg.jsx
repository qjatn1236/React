import React from "react";
import { TwoButtonMc } from "@molecules";

export default function LoginTwoButtonOg(props) {
  const { buttonProperties } = props;

  return (
    <>
      <TwoButtonMc buttonProperties={buttonProperties} />
      <div className="subWaveBg"></div>
    </>
  );
}
