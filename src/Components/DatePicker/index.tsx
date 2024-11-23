import React from "react";
import "./datePicker.scss";
import { WEEK_DAY } from "../../utils/enums";
import WeekDay from "./WeekDay";
import { abbreviationFromWeekDay, getMonthCalendar } from "../../utils/common";
import WeekMarkBody from "./WeekMarkBody";
type Props = {};

const DatePicker = (props: Props) => {
  const dateArray = getMonthCalendar(2023, 3);
  console.log(dateArray);
  return (
    <div className="date-picker-container">
      <div className="date-picker-header">Header</div>
      <div className="date-picker-body">
        <div className="date-picker-week-header">
          {WEEK_DAY.map((day) => (
            <WeekDay
              key={day}
              label={day}
              abbreviation={abbreviationFromWeekDay(day)}
            />
          ))}
        </div>
        <div className="date-picker-week-body">
          {dateArray.map((week) => (
            <div className="date-picker-week-body-week" key={week[0].getTime()}>
              {week.map((date) => (
                <WeekMarkBody
                  key={date.getTime()}
                  date={date}
                  isCurrentMonth={date.getMonth() === 3}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="date-picker-footer">Footer</div>
    </div>
  );
};

export default DatePicker;
