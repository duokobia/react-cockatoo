import React from "react";
import styles from "./TodoListItem.module.css";


const TodoListItem = ({ title, onRemoveTodo, id }) => {

  return ( 
    <div className={styles.Card}>
        <li key={id} >
         <span className={styles.ListItem}>{title}</span> 
          <button onClick={() => onRemoveTodo(id)}>
            <span className={styles.buttonLabel}>Remove</span>
        </button></li>
    </div>
  );
};

export default TodoListItem;