import React from "react";
import Bookmark from "./bookmark";
import Qualities from "./qualitie";

const User = ({
  onDelete,
  onToogleBookmark,
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        <Qualities quals={qualities} />
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToogleBookmark(_id)} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(name)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
