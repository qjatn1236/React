import React from "react";
import { OneBtnMc, LinkMc } from "@molecules";

export default function LoginFooter(props) {
  const { FooterProperties } = props;

  return (
    <div className="waveBg">
      <OneBtnMc buttonProperties={FooterProperties.buttonProperties} />

      <LinkMc linksItem={FooterProperties.linksItem} />
    </div>
  );
}
