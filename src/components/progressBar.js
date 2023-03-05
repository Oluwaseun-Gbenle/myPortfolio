import { useEffect, useState } from "react";
import { useScrollPosition } from "./scroll-on-y-axis";

export const ProgressBar = ({ width, skill,aboutoffSetTop}) => {
  const [scrollY, setscrollY] = useState(false);
  const scrollPosition = useScrollPosition();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      scrollPosition >= (aboutoffSetTop-150) && setscrollY(true);
      setValue(width);
    }, 1000);
  }, [value, scrollPosition]);

  return (
    <div className="progress">
      <span className="skill">
        {skill} <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          style={{ width: `${scrollY && value}%` }}
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};
