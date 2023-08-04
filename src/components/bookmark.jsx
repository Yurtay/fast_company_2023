import React from "react";

const Bookmark = ({ status, ...rest }) => {
  return (
    <button {...rest}>
      <i className={"bi bi-bookmarks" + (status ? "-fill" : "")}></i>
    </button>
  );
};

export default Bookmark;
