import dayjs from "dayjs";
import weeks from "./weeks.json";

const referenceWeek1Start = dayjs("2021-08-02");

const elapsedDays = dayjs().diff(referenceWeek1Start, "day");

export const currentWeekNo = (Math.ceil(elapsedDays / 4) % 4) - 1;
const nextWeekNo = currentWeekNo + 1 === 4 ? 0 : currentWeekNo + 1;

export const getAllWeeks = () => weeks;
export const getCurrentWeek = () => weeks[currentWeekNo];
export const getNextWeek = () => weeks[nextWeekNo];
