import React, { useEffect, useState } from "react";
import "./style.scss";

import axios from "axios";
import moment from "moment";
import Calendar from "react-calendar";

import { Button } from "@atoms";
import { CalendarTemplates } from "@templates";

export default function BookingHistory() {
  const [value, onChange] = useState(new Date());

  const [scheduleData, setScheduleData] = useState([]);
  const [mark, setMark] = useState([]);

  // 팝업
  const [popScheduleData, setPopScheduleData] = useState([]);
  const [popMark, setPopMark] = useState([]);

  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    axios
      .get("/src/api/schedule.json")
      .then((response) => {
        setScheduleData(response.data);

        const dates = response.data.map((item) => item.date);
        setMark(dates);
      })

      .catch((error) => {
        // 에러가 발생했을 때의 처리 로직
        console.error("Error fetching data:", error);
      });
  }, []);

  const buttonProperties = {
    buttonText: "예약하기",
    className: "blueButton calendarBookingButton",
    id: 1,
  };

  const popOpen = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    axios
      .get("/src/api/SelectDate.json")
      .then((response) => {
        setPopScheduleData(response.data);
        const dates = response.data.map((item) => item.date);
        setPopMark(dates);
      })

      .catch((error) => {
        // 에러가 발생했을 때의 처리 로직
        console.error("Error fetching data:", error);
      });
  }, []);

  const scheduleClass = {
    scheduleTitle: "scheduleTitle",
    scheduleTime: "scheduleTime",
  };

  return (
    <>
      <div className="myCalendar">
        <Calendar
          onChange={onChange}
          value={value}
          className="normalCalendar"
          // selectRange={true} // 달력기간 선택 하는 옵션
          formatDay={(locale, date) => moment(date).format("D")} // 날'일' 제외하고 숫자만 보이도록 설정
          next2Label={null} // 달력 넘어가는 2뎁스 안보이게 처리
          prev2Label={null} // 달력 넘어가는 2뎁스 안보이게 처리
          calendarType="gregory" // 일요일 부터 시작
          tileContent={({ date, view }) => {
            // 추가할 html 태그를 변수 초기화
            let html = [];

            // 해당 날짜의 일정이 있는지 확인
            const scheduleOfDay = scheduleData.find((item) => moment(item.date).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD"));
            if (scheduleOfDay) {
              // 해당 날짜의 일정이 있다면 CalendarTemplates으로 컴포넌트 렌더링
              html.push(<CalendarTemplates key={moment(date).format("YYYY-MM-DD")} schedule={scheduleOfDay.schedule} scheduleClass={scheduleClass} />);
            }

            return <>{html}</>;
          }}
        />

        <Button buttonText={buttonProperties.buttonText} className={buttonProperties.className} onClick={popOpen} />
        {showPopup && <div className="Dim"></div>}
        {showPopup && (
          <Calendar
            onChange={onChange}
            value={value}
            className="unavailableCalendar"
            formatDay={(locale, date) => moment(date).format("D")} // 날'일' 제외하고 숫자만 보이도록 설정
            next2Label={null} // 달력 넘어가는 2뎁스 안보이게 처리
            prev2Label={null} // 달력 넘어가는 2뎁스 안보이게 처리
            tileContent={({ date, view }) => {
              // 추가할 html 태그를 변수 초기화
              let html = [];

              if (popScheduleData.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                html.push(
                  <div className="unavailableDate" key={moment(date).format("YYYY-MM-DD")}>
                    예약완료
                  </div>
                );
              }

              return <>{html}</>;
            }}
          />
        )}
      </div>

      {/* <div className="text-gray-500 mt-4">{moment(value).format("YYYY년 MM월 DD일")}</div> */}
    </>
  );
}
