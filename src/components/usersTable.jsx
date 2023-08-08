import React from "react";
import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
  const columns = {
    name: { pass: "name", name: "Name" },
    qualities: { name: "Quqlities" },
    professions: { pass: "profession.name", name: "Profession" },
    completedMeetings: {
      pass: "completedMeetings",
      name: "Completed meetings",
    },
    rate: { pass: "rate", name: "Rate" },
    bookmark: { pass: "bookmark", name: "Bookmark" },
    delete: {},
  };
  return (
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
      {/* <tbody>
        {users.map((user) => (
          <User key={user._id} {...rest} {...user} />
        ))}
      </tbody> */}
    </table>
  );
};

export default UsersTable;
