import React from "react";
const TableHeader = ({ onSort, selectedSort, columns }) => {
  const renderSortArrow = (selectedSort, currentPath) => {
    if (selectedSort.path === currentPath) {
      if (selectedSort.order === "asc") {
        return <i className="bi bi-chevron-compact-down m-2"></i>;
      } else {
        return <i className="bi bi-chevron-compact-up m-2"></i>;
      }
    }
    return null;
  };

  const handleSort = (item) => {
    console.log(item);
    if ((selectedSort.path = item)) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            role={columns[column].path && "button"}
            scope="col"
          >
            <div>
              {columns[column].name}
              {renderSortArrow(selectedSort, columns[column].path)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
