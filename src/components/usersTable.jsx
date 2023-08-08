import React from "react";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToogleBookmark,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: { path: "name", name: "Name" },
    qualities: {
      name: "Quqlities",
      component: (user) => <QualitiesList quals={user.qualities} />,
    },
    professions: { path: "profession.name", name: "Profession" },
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
