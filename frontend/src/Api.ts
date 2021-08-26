import { useAsync } from "./useAsync";

console.log({ d: import.meta.env.VITE_BACK_URL });
const fetchWeek = async () =>
  fetch(`https://5nnzw2fis1.execute-api.eu-west-3.amazonaws.com/week`).then(
    (r) => r.json()
  );

export const useWeek = () => useAsync(fetchWeek, []);
