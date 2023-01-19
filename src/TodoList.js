import React from "react";


const todoList = [
    {
      id: 1,
      title: "Completed assignment",
    },
    {
      id: 2,
      title: "Remove the directory of Completed assignment",
    },
    {
      id: 3,
      title: "Re-do Coding assignment",
    },
  ];

const TodoList = () => {
  return (
    <ul>
    {todoList.map(function (item) {
      return <li key = {item.id}>{item.title}</li>
    })}
  </ul>
  );
};

export default TodoList;