import React from "react";
import './TodoItem.css'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      {/* <h2 className="sno">{todo.sno} . </h2> */}
      <div className="tp">
      <h2 className="title">{todo.title}</h2>
      <button className="dltbtn" onClick={() => onDelete(todo)}>Delete</button>
      </div>
      <h2 className="desc">{todo.desc}</h2>
      <hr />
    </>
  );
};
