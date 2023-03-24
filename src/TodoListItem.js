import React from "react";


const TodoListItem = ({ title, onRemoveTodo, id }) => {

  return ( 
    <div>
        <li key={id}>
          {title}<button onClick={() => onRemoveTodo(id)} >Remove</button></li>
    </div>
  );
};

export default TodoListItem;