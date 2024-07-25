import React from "react";
import { LinkItem } from "@atoms";

export default function LinkMc(props) {
  const { linksItem } = props;

  return (
    <>
      <div className="userInfoBox">
        {linksItem.map((elements, index) => (
          <LinkItem goTo={elements.goTo} goToText={elements.goToText} key={index} />
        ))}
      </div>
    </>
  );
}
