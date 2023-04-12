import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types';



const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map(todo => 
        <TodoListItem key = {todo.id} id = {todo.id} title = {todo.fields.Title} onRemoveTodo = {onRemoveTodo} /> 
      )}
    </ul>
  );
};

export default TodoList;

TodoList.propTypes = {
  todoList: PropTypes.object,
  onRemoveTodo: PropTypes.func
};