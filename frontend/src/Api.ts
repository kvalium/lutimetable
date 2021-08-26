import { useAsync } from "./useAsync";

const fetchWeek = async () =>
  fetch(`${import.meta.env.VITE_BACK_URL}/week`).then((r) => r.json());

export const useWeek = () => useAsync(fetchWeek, []);
