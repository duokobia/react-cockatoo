import React, {useState} from "react";

const AddTodoForm = ({props}) => {

  const[todoTitle, setTodoTitle] = useState("");
  

  function handleAddTodo (event){
    event.preventDefault(); // Prevent the default behaviour of the form submit.
    // const todoTitle = event.target.value;
    console.log(todoTitle);
    // setTodoTitle(event.target.value);
    // const todoTitle = event.target.title.value
    props.onAddTodo(event);
    event.target.reset(); // Reset form onSubmit.
  };


  return (
    <form onSubmit={(event) => handleAddTodo(event)}>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" name="title" onChange={(event) => setTodoTitle(event.target.value)}></input>
        <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;