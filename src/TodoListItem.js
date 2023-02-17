import React from "react";


const TodoListItem = ({ todo, onRemoveTodo, objectID }) => {



  return ( 
    <div>
        <li>{todo.title}<button onClick={() => onRemoveTodo(objectID)} >Remove</button></li>
    </div>
  );
};

export default TodoListItem;