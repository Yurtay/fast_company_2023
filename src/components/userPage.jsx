import React, { useEffect, useState } from "react";
import API from "../app/api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
  // 67rdca3eeb7f6fgeed47181r
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.getUserById(userId).then((data) => setUser(data));
  });
  const handleClick = (params) => {
    history.push("/users");
  };

  if (user) {
    return (
      <div className="m-3">
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList quals={user.qualities} />
        <p>completed meetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button onClick={handleClick}>All users</button>
      </div>
    );
  } else {
    return <h2>Loading user...</h2>;
  }
};

export default UserPage;
