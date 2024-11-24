import React from "react";
import { MONTHS } from "../../utils/enums";

type Props = {
  month: number;
  year: number;
  onForwardClick: () => void;
  onBackwardClick: () => void;
  isForwardDiabled?: boolean;
  isBackwardDiabled?: boolean;
  classStart: string;
};

const MonthHeader = (props: Props) => {
  return (
    <div className={`${props.classStart}-header`}>
      <button
        onClick={props.isBackwardDiabled ? () => {} : props.onBackwardClick}
        className={`${props.classStart}-header-left-icon ${
          props.isForwardDiabled ? "disabled" : ""
        }`}
      >
        ⬅️
      </button>
      <div className={`${props.classStart}-header-month-year`}>
        {MONTHS[props.month]} {props.year}
      </div>
      <button
        onClick={props.isBackwardDiabled ? () => {} : props.onForwardClick}
        className={`${props.classStart}-header-right-icon ${
          props.isBackwardDiabled ? "disabled" : ""
        }`}
      >
        ➡️
      </button>
    </div>
  );
};

export default MonthHeader;
