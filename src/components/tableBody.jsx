import React from "react";
const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => {
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{item[columns[column].path]}</td>
          ))}
        </tr>;
      })}
    </tbody>
  );
};

export default TableBody;
