import { useEffect, useState } from "react";

export const useScrollY = (): number => {
  const CAN_USE_DOM = typeof window !== "undefined";
  const [scrollY, sestScrollY] = useState<number>(0);

  const handleScroll = () => {
    const currenScrollY = CAN_USE_DOM ? window.scrollY : 0;
    sestScrollY(currenScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollY;
};
