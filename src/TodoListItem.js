import React from "react";


const TodoListItem = (props) => {
  return ( 
    <div>
      {/* Updating todo object reference to come from props is done 
      by adding "props." to "todo.title" */}
        <li>{props.todo.title}</li>
    </div>
  );
};

export default TodoListItem;