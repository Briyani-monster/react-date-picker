import React, { useEffect, useMemo, useState } from "react";
import "./datePicker.scss";
import { WEEK_DAY } from "../../utils/enums";
import WeekDay from "./WeekDay";
import { abbreviationFromWeekDay, getMonthCalendar } from "../../utils/common";
import WeekMarkBody from "./WeekMarkBody";
import MonthHeader from "./MonthHeader";
type Props = {};

const DatePicker = (props: Props) => {
  const [month, setMonth] = useState(3);
  const [year, setYear] = useState(2023);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dateArray = useMemo(() => getMonthCalendar(year, month), [month, year]);

  const onBackwardClick = () => {
    setMonth((prev) => {
      if (prev === 0) {
        setYear(year - 1);
        return 11;
      }
      return prev - 1;
    });
  };
  const onForwardClick = () => {
    setMonth((prev) => {
      if (prev === 11) {
        setYear(year + 1);
        return 0;
      }

      return prev + 1;
    });
  };
  const onSelectionChange = (date: Date) => {
    if (date.getMonth() !== month) {
      setMonth(date.getMonth());
      setYear(date.getFullYear());
    } else {
      setSelectedDate(date);
    }
  };
  console.log(month, dateArray);
  return (
    <div className="date-picker">
      <div className="date-picker-container">
        <MonthHeader
          month={month}
          year={year}
          classStart="date-picker"
          onBackwardClick={onBackwardClick}
          onForwardClick={onForwardClick}
        />

        <div className="date-picker-body">
          <div className="date-picker-week-header">
            {WEEK_DAY.map((day) => (
              <WeekDay
                key={day}
                classStart="date-picker"
                label={day}
                abbreviation={abbreviationFromWeekDay(day)}
              />
            ))}
          </div>
          <div className="date-picker-week-body">
            {dateArray.map((week) => (
              <div
                className="date-picker-week-body-item"
                key={week[0].getTime()}
              >
                {week.map((date) => (
                  <WeekMarkBody
                    key={date.getTime()}
                    onClick={onSelectionChange}
                    classStart="date-picker"
                    date={date}
                    selectedDate={selectedDate}
                    isCurrentMonth={date.getMonth() === month}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="date-picker-footer">Footer</div> */}
      </div>
    </div>
  );
};

export default DatePicker;
