import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import API from "../../app/api";
import { orderBy } from "lodash";
import AddCommentForm from "../common/comments/addCommentForm";
import CommentList from "../common/comments/commentsList";

const Comments = () => {
  const { userId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    API.comments.fetchCommentsForUser(userId)
    .then((data) => setComments(data));
  }, []);

  const handleSubmit = (data) => {
    API.comments
      .add({ ...data, pageId: userId })
      .then((data) => setComments([...comments, data]));
  };

  const handleRemoveComment = (id) => {
    API.comments.remove(id).then((id) => {
      setComments(comments.filter((x) => x._id !== id));
    });
  };
  const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
  return (
    <>
      <div className="card mb-2">
        <div className="card-body">
          <AddCommentForm onSubmit={handleSubmit} />
        </div>
      </div>
      {sortedComments.length > 0 && (
        <div className="card mb-3">
          <div className="card-body">
            <h2>Comments</h2>
            <hr />
            <CommentList
              comments={sortedComments}
              onRemove={handleRemoveComment}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
