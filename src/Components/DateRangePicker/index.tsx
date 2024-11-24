import { useMemo, useState } from "react";
import "./date-range.scss";
import MonthHeader from "../DatePicker/MonthHeader";
import { WEEK_DAY } from "../../utils/enums";
import WeekDay from "../DatePicker/WeekDay";
import { abbreviationFromWeekDay, getMonthCalendar } from "../../utils/common";
import WeekMarkBody from "../DatePicker/WeekMarkBody";
type Props = {};
const DateRangePicker = (props: Props) => {
  const [startMonth, setStartMonth] = useState(3);
  const [startYear, setStartYear] = useState(2023);
  const [endMonth, setEndMonth] = useState(4);
  const [endYear, setEndYear] = useState(2023);
  const [startSelectedDate, setStartSelectedDate] = useState<Date | null>(null);
  const [endSelectedDate, setEndSelectedDate] = useState<Date | null>(null);

  const startDateArray = useMemo(
    () => getMonthCalendar(startYear, startMonth),
    [startMonth, startYear]
  );
  const endDateArray = useMemo(
    () => getMonthCalendar(endYear, endMonth),
    [endMonth, endYear]
  );

  const onStartBackwardClick = () => {
    setStartMonth((prev) => {
      if (prev === 0) {
        setStartYear(startYear - 1);
        return 11;
      }
      return prev - 1;
    });
  };
  const onStartForwardClick = () => {
    setStartMonth((prev) => {
      if (prev === 11) {
        setStartYear(startYear + 1);
        return 0;
      }
      return prev + 1;
    });
  };
  const onStartSelectionChange = (date: Date) => {
    if (date.getMonth() !== startMonth) {
      setStartMonth(date.getMonth());
      setStartYear(date.getFullYear());
    } else {
      setStartSelectedDate(date);
    }
  };
  const onEndSelectionChange = (date: Date) => {
    if (date.getMonth() !== endMonth) {
      setEndMonth(date.getMonth());
      setEndYear(date.getFullYear());
    } else {
      setEndSelectedDate(date);
    }
  };
  const onEndBackwardClick = () => {
    setEndMonth((prev) => {
      if (prev === 0) {
        setEndYear(endYear - 1);
        return 11;
      }
      return prev - 1;
    });
  };
  const onEndForwardClick = () => {
    setEndMonth((prev) => {
      if (prev === 11) {
        setEndYear(endYear + 1);
        return 0;
      }
      return prev + 1;
    });
  };
  return (
    <div className="date-range-picker">
      <div className="date-range-picker-container">
        <MonthHeader
          month={startMonth}
          year={startYear}
          isForwardDiabled={startMonth > endMonth}
          onBackwardClick={onStartBackwardClick}
          onForwardClick={onStartForwardClick}
        />
        <div className="date-range-picker-body">
          <div className="date-range-picker-week-header">
            {WEEK_DAY.map((day) => (
              <WeekDay
                key={day}
                label={day}
                abbreviation={abbreviationFromWeekDay(day)}
              />
            ))}
          </div>
          <div className="date-picker-week-body">
            {startDateArray.map((week) => (
              <div
                className="date-picker-week-body-week"
                key={week[0].getTime()}
              >
                {week.map((date) => (
                  <WeekMarkBody
                    key={date.getTime()}
                    onClick={onStartSelectionChange}
                    date={date}
                    selectedDate={startSelectedDate}
                    isCurrentMonth={date.getMonth() === startMonth}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="date-range-picker-container">
        <div className="date-range-picker-container">
          <MonthHeader
            month={endMonth}
            isBackwardDiabled={startMonth < endMonth}
            year={endYear}
            onBackwardClick={onEndBackwardClick}
            onForwardClick={onEndForwardClick}
          />
          <div className="date-range-picker-body">
            <div className="date-range-picker-week-header">
              {WEEK_DAY.map((day) => (
                <WeekDay
                  key={day}
                  label={day}
                  abbreviation={abbreviationFromWeekDay(day)}
                />
              ))}
            </div>
            <div className="date-picker-week-body">
              {endDateArray.map((week) => (
                <div
                  className="date-picker-week-body-week"
                  key={week[0].getTime()}
                >
                  {week.map((date) => (
                    <WeekMarkBody
                      key={date.getTime()}
                      onClick={onEndSelectionChange}
                      date={date}
                      selectedDate={endSelectedDate}
                      isCurrentMonth={date.getMonth() === endMonth}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
