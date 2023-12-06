import React from "react";
import { useHistory } from "react-router-dom";
import { RandomAvatar } from "react-random-avatar";

const UserCard = ({ user }) => {
  const history = useHistory();
  const handleClick = (params) => {
    history.push("/users");
  };
  const handleClickChange = (params) => {
    // history.push(`/users/${userId}/edit`);
    history.push(history.location.pathname + "/edit");
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <button
          className="position-absolute top-0 end-0 btn btn-light btn-sm"
          onClick={handleClickChange}
        >
          <i className="bi bi-gear"></i>
        </button>
        <div className="d-flex flex-column align-items-centerm text-center position-relative">
          <div className="mt-3">
            <RandomAvatar size={20} />
          </div>
          <div className="mt-3">
            <h4>{user.name}</h4>
            <p className="text-secondary mb-1">{user.profession.name}</p>
            <div className="text-muted">
              <i
                className="bi bi-caret-down-fill text-primary"
                role="button"
              ></i>
              <i className="bi bi-caret-up text-secondary" role="button"></i>
              <span className="ms-2">{user.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
