import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import API from "../app/api";

const Users = ({ users: allUsers, ...rest }) => {
  const count = allUsers.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleProfesionSelect = (item) => {
    setSelectedProf(item);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => {
        if (user.profession !== selectedProf) {
          console.log(user.profession, selectedProf);
        }

        return user.profession === selectedProf;
      })
    : allUsers;
  console.log(filteredUsers, selectedProf);
  const usersCrop = paginate(filteredUsers, currentPage, pageSize);

  return (
    <>
      {professions && (
        <GroupList
          selectedItem={selectedProf}
          items={professions}
          onItemSelect={handleProfesionSelect}
        />
      )}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Qualities</th>
            <th scope="col">Profession</th>
            <th scope="col">Meets</th>
            <th scope="col">Rate</th>
            <th scope="col">Bookmark</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {usersCrop.map((user) => (
            <User key={user._id} {...rest} {...user} />
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Users;
