import React, { useEffect, useRef } from 'react';
import styles from "./TodoListItem.module.css";


const InputWithLabel = (props) => {

  const inputRef = useRef();

  useEffect(() => {
          inputRef.current.focus();
  }, []);


  return (
    <>
    <label htmlFor = "todoTitle">{props.children}</label>
    <input 
        id = "todoTitle" 
        name = "title" 
        type = "text"
        value = {props.todoTitle} 
        onChange = {props.handleTitleChange} 
        ref = {inputRef}
        className={styles.InputField}
    ></input>
    </>
  );
};

export default InputWithLabel;