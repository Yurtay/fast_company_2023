import React, { useState } from "react";
import Users from "./components/users";
import RenderPhrase from "./components/searchStatus";
import API from "./app/api";

function App() {
  const [users, setusers] = useState(API.users.fetchAll());
  const handleDelete = (userDel) => {
    setusers(users.filter((user) => user.name !== userDel));
  };
  const handleChangeBookmark = (id) => {
    const userIndex = users.findIndex((user) => user._id === id);
    const newUsers = [...users];
    newUsers[userIndex].bookmark = !newUsers[userIndex].bookmark;
    setusers(newUsers);
  };
  return (
    <>
      <RenderPhrase numberOfUser={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onToogleBookmark={handleChangeBookmark}
      />
    </>
  );
}

export default App;
