import React from "react";
const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if ((selectedSort.pass = item)) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ pass: item, order: "asc" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].iter
                ? () => handleSort(columns[column].iter)
                : undefined
            }
            role={columns[column].iter && "button"}
            scope="col"
          >
            {columns[column].name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
