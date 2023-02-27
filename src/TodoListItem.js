import React from "react";


const TodoListItem = ({ todo, onRemoveTodo, id }) => {

  return ( 
    <div>
        <li>{todo.title}<button onClick={() => onRemoveTodo(id)} >Remove</button></li>
    </div>
  );
};

export default TodoListItem;