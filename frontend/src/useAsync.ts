import { useState, useEffect } from "react";

export const useAsync = <T>(fn: () => Promise<T>, deps: any[]) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [res, setRes] = useState<T | undefined>();
  useEffect(() => {
    setLoading(true);
    let cancel = false;
    fn().then(
      (res) => {
        console.log({ res });
        if (cancel) return;
        setLoading(false);
        setRes(res);
      },
      (error) => {
        if (cancel) return;
        setLoading(false);
        setError(error);
      }
    );
    return () => {
      cancel = true;
    };
  }, deps);
  return { loading, error, res };
};
