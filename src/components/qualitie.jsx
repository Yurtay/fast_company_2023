import React from "react";

const Qualities = ({ quals }) => {
  const getColorQualities = (color) => {
    return "badge m-1 bg-" + color;
  };
  return quals.map((q, i) => {
    return (
      <span key={i} className={getColorQualities(q.color)}>
        {q.name}
      </span>
    );
  });
};

export default Qualities;
