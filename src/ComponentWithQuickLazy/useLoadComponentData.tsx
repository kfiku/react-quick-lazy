import { useEffect, useState } from "react";

export function useLoadComponentData() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setData('component has some data');
    }, 2000);
  }, [])

  return {
    data,
    isLoading: !data
  };
}
