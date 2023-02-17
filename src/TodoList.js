import React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = ({todoList, onRemoveTodo, objectID }) => {
  return (
    <ul>
      {todoList.map(todo => 
        <TodoListItem key = {todo.id} todo = {todo} onRemoveTodo = {onRemoveTodo} objectID = {objectID}/> 
      )}
    </ul>
  );
};

export default TodoList;