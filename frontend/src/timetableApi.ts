import { useAsync } from "react-async";

type Hours = {
  morning: string;
  afternoon: string;
};

type Week = {
  [d in Day]: Hours;
};

type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

const daysOrder: { [k in Day]: number } = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

type OrderedDays = (Hours & { day: Day })[];

const fetchWeek = async () => {
  const week: Week = await fetch(`${import.meta.env.VITE_BACK_URL}/week`).then(
    (r) => r.json()
  );

  const weekDays = Object.keys(week) as Day[];
  const ordered = weekDays
    .reduce(
      (days: OrderedDays, d: Day) => [...days, { day: d, ...week[d] }],
      []
    )
    .sort((a, b) => daysOrder[a.day] - daysOrder[b.day]);

  return ordered;
};

export const useWeek = () => useAsync(fetchWeek);
