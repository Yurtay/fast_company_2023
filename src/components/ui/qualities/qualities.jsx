import React from "react";
import { useQualities } from "../../../app/hooks/useQualities";

const Qualities = ({ quals }) => {
  const { isLoading, getQuality } = useQualities();
  const newQuals = quals.map((q) => getQuality(q));
  // console.log(newQuals);
  // const quality = getQuality()
  if (isLoading) return "Loading...";
  const getColorQualities = (color) => {
    return "badge m-1 bg-" + color;
  };
  return newQuals.map((q, i) => {
    return (
      <span key={i} className={getColorQualities(q.color)}>
        {q.name}
      </span>
    );
  });
};

export default Qualities;
