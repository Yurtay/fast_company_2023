import React from "react";

const GroupList = ({
  items,
  selectedItem,
  valueProperty,
  contentProperty,
  onItemSelect,
}) => {
  if (Array.isArray(items)) {
    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              "list-group-item" + (selectedItem === item ? " active" : "")
            }
            onClick={() => onItemSelect(item)}
            role="button"
          >
            {item[contentProperty]}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={
            "list-group-item" + (selectedItem === items[item] ? " active" : "")
          }
          onClick={() => onItemSelect(items[item])}
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};
GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};
export default GroupList;
