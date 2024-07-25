import React from "react";
import { AuthTextItem } from "@atoms";

export default function AuthTextMc(props) {
  const { completeText } = props;

  return (
    <>
      <AuthTextItem completeText={completeText} />
    </>
  );
}
