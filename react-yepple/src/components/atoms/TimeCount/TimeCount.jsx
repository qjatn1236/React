import React, { useState, useEffect } from "react";
import "./style.scss";

export default function TimeCountMc() {
  // 초기 타이머 시간 (초)을 정의함. 180초 ex) 60초 = 1분
  const initialTime = 180;
  // 남은 시간을 상태로 관리함.
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      // 남은 시간이 0보다 크면 1초씩 감소시킴.
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        // 남은 시간이 0이 되면 타이머 정지.
        clearInterval(timer);
      }
    }, 1000);

    // 컴포넌트가 언마운트되면 타이머 정지
    return () => clearInterval(timer);
  }, [remainingTime]); // remainingTime이 변경될 때마다 useEffect가 다시 실행됨.

  // 시간을 분과 초로 변환하는 함수 정의.
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // 재전송 버튼을 클릭했을 때 호출되는 함수 정의.
  // const handleResendClick = () => {
  //   // 남은 시간을 초기값으로 설정하여 타이머 재설정.
  //   setRemainingTime(initialTime);
  // };

  return (
    <>
      <span className="timeCount" style={{ color: "#F67D8B" }}>
        {formatTime(remainingTime)}
      </span>
    </>
  );
}
