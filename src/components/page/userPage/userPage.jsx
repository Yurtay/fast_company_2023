import React, { useEffect, useState } from "react";
import API from "../../../app/api";
import QualitiesList from "../../ui/qualities/qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  }, []);
  const handleClick = (params) => {
    history.push("/users");
  };
  const handleClickChange = (params) => {
    // history.push(`/users/${userId}/edit`);
    history.push(history.location.pathname + "/edit");
  };

  if (user) {
    return (
      <div className="m-2">
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList quals={user.qualities} />
        <p>completed meetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <div className="m-3">
          <button onClick={handleClick}>All users</button>
        </div>
        <div className="m-2">
          <button onClick={handleClickChange}>Change user</button>
        </div>
      </div>
    );
  } else {
    return <h2>Loading user...</h2>;
  }
};

export default UserPage;
