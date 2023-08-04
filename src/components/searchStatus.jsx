import React from "react";

const RenderPhrase = ({ numberOfUser }) => {
  let color = "badge bg-primary";
  let message = numberOfUser + " человек тусанет с тобой сегодня";
  if (numberOfUser < 5 && numberOfUser > 1) {
    message = numberOfUser + " человека тусанет с тобой сегодня";
  } else if (numberOfUser === 0) {
    message = "Никто не тусанет с тобой сегодня!";
    color = "badge bg-danger";
  } else {
    message = numberOfUser + " человек тусанет с тобой сегодня";
  }
  return (
    <h2>
      <span className={color}>{message}</span>
    </h2>
  );
};

export default RenderPhrase;
