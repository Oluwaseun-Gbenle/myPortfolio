import { useEffect, useState } from "react";

export const ProgressBar = ({ width, skill}) => {
 const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(width);
    }, 1000);
  }, [value]);

  return (
    <div className="progress">
      <span className="skill">
        {skill} <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar" data-aos="slide-right"
          style={{ width: `${value}%` }}
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};
