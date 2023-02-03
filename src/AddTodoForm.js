import React, {useState} from "react";



let AddTodoForm = ({onAddTodo}) => {

  const [todoTitle, setTodoTitle] = useState("");

  let handleTitleChange = function(event){
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  let handleAddTodo = function (event){
    event.preventDefault(); // Prevents the default behaviour of the form submit.
    console.log(todoTitle);
    setTodoTitle(""); // Reset state onSubmit of form.
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
  };


  return (
    <form onSubmit={(event) => handleAddTodo(event)}>
        <label htmlFor = "todoTitle">Title</label>
        <input id = "todoTitle" name = "title" value = {todoTitle} onChange = {handleTitleChange}></input>
        <button type = "submit">Add</button>
    </form>
  );
};

export default AddTodoForm;