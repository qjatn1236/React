import React from "react";
import ToneList1 from "./ToneList1";
import ToneList2 from "./ToneList2";
import ToneList3 from "./ToneList3";
import ToneList4 from "./ToneList4";
import ToneList5 from "./ToneList5";

/********** 톤 오브 보이스 view **********/

const ToneView = () => {
  
  return (
    <div>
      {/* 톤 오브 보이스의 이해 */}
      <ToneList1 />
      {/* 톤 오브 보이스 차트 */}
      <ToneList2 />
      {/* 톤 오브 보이스 적용 */}
      <ToneList3 />
      {/* 메이킹 톤 오브 보이스 */}
      <ToneList4 />
      {/* 톤 오브 보이스 체크리스트 */}
      <ToneList5 />
    </div>
  );
};

export default ToneView;
