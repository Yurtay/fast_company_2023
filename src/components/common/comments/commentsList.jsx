import React from "react";
import Comment from "./comment";

const CommentList = ({ comments, onRemove }) => {
  return comments.map((comment) => (
    <Comment key={comment._id} {...comment} onRemove={onRemove} />
  ));
};

export default CommentList;
