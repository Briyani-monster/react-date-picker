import React from "react";

type Props = {
  abbreviation: string;
  label: string;
  classStart: string;
};

const WeekDay = ({ label, abbreviation, classStart }: Props) => {
  return (
    <div aria-label={label} className={`${classStart}-week-header-day`}>
      {abbreviation}
    </div>
  );
};

export default WeekDay;
