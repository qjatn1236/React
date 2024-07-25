import React from "react";
import { OneBtnMc } from "@molecules";

export default function LoginOneButtonOg(props) {
  const { buttonProperties } = props;

  return (
    <>
      <OneBtnMc buttonProperties={buttonProperties} />
      <div className="subWaveBg"></div>
    </>
  );
}
