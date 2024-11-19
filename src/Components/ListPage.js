import React from "react";
import { link } from "react-router-dom";

function ListPage({ todo }) {
  return (
    <div>
      <link to={`/todos/${todo.id}`}>
        <h3>{todo.id}</h3>
        <h3>{todo.item}</h3>
      </link>
    </div>
  );
}

export default ListPage;
