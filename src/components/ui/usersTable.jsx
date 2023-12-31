import React from "react";
import Bookmark from "../common/bookmark";
import Qualities from "./qualities";
import Table from "../common/table";
import { Link } from "react-router-dom";
import Profession from "./profession";

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToogleBookmark,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Name",
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>,
    },
    qualities: {
      name: "Quqlities",
      component: (user) => <Qualities quals={user.qualities} />,
    },
    professions: {
      name: "Profession",
      component: (user) => <Profession id={user.profession} />,
    },
    completedMeetings: {
      path: "completedMeetings",
      name: "Completed meetings",
    },
    rate: { path: "rate", name: "Rate" },
    bookmark: {
      path: "bookmark",
      name: "Bookmark",
      component: (user) => (
        <Bookmark
          status={user.bookmark}
          onClick={() => onToogleBookmark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
          delete
        </button>
      ),
    },
  };
  return <Table {...{ onSort, selectedSort, columns, data: users }} />;
};

export default UsersTable;
