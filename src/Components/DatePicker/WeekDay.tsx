import React from "react";

type Props = {
  abbreviation: string;
  label: string;
};

const WeekDay = ({ label, abbreviation }: Props) => {
  return (
    <div aria-label={label} className="date-picker-week-header-day">
      {abbreviation}
    </div>
  );
};

export default WeekDay;
