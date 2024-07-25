import React from "react";

export default function ScheduleItem(props) {
  const { schedule, scheduleClass } = props;

  return (
    <>
      {schedule.map((items) => (
        <div key={items.id} className={items.type}>
          <p className={scheduleClass.scheduleTitle}>{items.title}</p>
          <p className={scheduleClass.scheduleTime}>{items.time}</p>
        </div>
      ))}
    </>
  );
}
