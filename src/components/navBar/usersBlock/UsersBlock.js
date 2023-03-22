import React from "react";

export const UsersBlock = ({ item }) => {
  return (
    <div>
      <ul>
        <li>
          <p>{item.name}</p>
        </li>
        <li>
          <p>{item.email}</p>
        </li>
      </ul>
    </div>
  );
};