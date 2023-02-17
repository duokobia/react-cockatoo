import React, { useEffect, useRef } from 'react';

const InputWithLabel = (props) => {

    const inputRef = useRef();

    useEffect(() => {
            inputRef.current.focus();
    }, []);


  return (
    <>
    <label children = "todoTitle">Title</label>
    <input 
        id = "todoTitle" 
        name = "title" 
        value = {props.todoTitle} 
        onChange = {props.handleTitleChange} 
        ref = {inputRef}
      >

    </input>
    </>
  )
};

export default InputWithLabel;