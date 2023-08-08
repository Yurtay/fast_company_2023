import React, { useEffect, useState } from "react";
import Users from "./components/users";
import API from "./app/api";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    API.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (userDel) => {
    setUsers(users.filter((user) => user.name !== userDel));
  };

  const handleChangeBookmark = (id) => {
    // const userIndex = users.findIndex((user) => user._id === id);
    // const newUsers = [...users];
    // newUsers[userIndex].bookmark = !newUsers[userIndex].bookmark;
    // setUsers(newUsers);
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };
  return (
    <>
      {users ? (
        <Users
          users={users}
          onDelete={handleDelete}
          onToogleBookmark={handleChangeBookmark}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default App;
