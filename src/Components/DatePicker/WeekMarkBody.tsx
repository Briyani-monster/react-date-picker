import React from "react";

type Props = {
  date: Date;
  isCurrentMonth: boolean;
};

const WeekMarkBody = ({ date, isCurrentMonth }: Props) => {
  return (
    <div
      role="row"
      className={`date-picker-week-body-day ${
        isCurrentMonth ? "current-month" : ""
      }`}
    >
      {date.getDate()}
    </div>
  );
};

export default WeekMarkBody;
