import React from "react";


const TodoListItem = (props) => {
  return ( 
    <div>
      {/* Updating todo object reference to come from props is done 
      by adding "props." to "todo.title".

      "props.todo.title" means the "props" passed into this function(component) has an object in it called "todo".
      So get me the value of an item in this "todo" object using the key: "title".
      */}
        <li>{props.todo.title}</li>
    </div>
  );
};

export default TodoListItem;