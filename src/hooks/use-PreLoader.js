import { useEffect, useState } from "react";

export const usePreLoader = () => {
  const [PreLoading, setPreLoading] = useState(false);

  useEffect(() => {
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
    }, 2000);
  }, []);
  return PreLoading;
};
