import React from "react";
import { TodoItem } from "./TodoItem";
import './Todos.css'
export const Todos = (props) => {
  return (
    <>
      <div className="container">
        <h3>Todos List</h3>
        {props.todos.length === 0
          ? <h2>No Todos To display</h2>
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              );
            })}
      </div>
    </>
  );
};
