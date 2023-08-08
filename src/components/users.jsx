import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import API from "../app/api";
import SearchStatus from "./searchStatus";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = ({ users: allUsers, ...rest }) => {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleProfesionSelect = (item) => {
    setSelectedProf(item);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession._id === selectedProf._id)
    : allUsers;
  const count = filteredUsers?.length;
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);

  const usersCrop = paginate(sortedUsers, currentPage, pageSize);

  const clearFilter = () => {
    setSelectedProf();
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfesionSelect}
          />
          <button onClick={clearFilter} className="btn btn-secondary mt-2">
            Clear
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus numberOfUser={count} />
        <UsersTable
          users={usersCrop}
          {...rest}
          onSort={handleSort}
          selectedSort={sortBy}
        />
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Users;
