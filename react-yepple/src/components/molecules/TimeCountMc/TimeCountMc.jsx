import React from "react";

import { TimeCount } from "@atoms";

export default function TimeCountMc(props) {
  return <>{props.timeOut && <TimeCount />}</>;
}
