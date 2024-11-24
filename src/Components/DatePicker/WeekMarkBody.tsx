import React from "react";

type Props = {
  date: Date;
  isCurrentMonth: boolean;
  onClick: (date: Date) => void;
  selectedDate: Date | null;
  classStart: string;
};

const WeekMarkBody = ({
  date,
  isCurrentMonth,
  onClick,
  selectedDate,
  classStart,
}: Props) => {
  return (
    <div
      role="row"
      className={`${classStart}-week-body-item-day ${
        isCurrentMonth ? "current-month" : ""
      } ${
        date.toDateString() === selectedDate?.toDateString() ? "selected" : ""
      }`}
      onClick={() => onClick(date)}
    >
      {date.getDate()}
    </div>
  );
};

export default WeekMarkBody;
