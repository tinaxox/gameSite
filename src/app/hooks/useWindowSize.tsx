import { useEffect, useRef, useState } from "react";

export default function useWindowSize() {;
  const [screenSize, setScreenSize] = useState({
    width: window && window.innerWidth,
    height: window && window.innerHeight,
  });

  const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  useEffect(() => {
    

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
