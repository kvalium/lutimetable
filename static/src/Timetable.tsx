import React from "react";
import "./App.css";
import { currentWeekNo, getCurrentWeek } from "./timetableApi";

export const Timetable = () => {
  const cw = getCurrentWeek();
  console.log(cw, currentWeekNo);
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {Object.keys(cw).map((dayName) => (
            <th key={dayName}>{dayName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Morning</th>
          {Object.values(cw).map(({ Morning }, i) => (
            <React.Fragment key={i}>
              <th>{Morning}</th>
            </React.Fragment>
          ))}
        </tr>
        <tr>
          <th>Afternoon</th>
          {Object.values(cw).map(({ Afternoon }, i) => (
            <React.Fragment key={i}>
              <th>{Afternoon}</th>
            </React.Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
