import React, {useState} from "react";

// Using this alternative approach means that I am not optimizing the use of the "const [newTodo, setNewTodo] = useState("");"
// in the App.js component. I am also making the application heavier by adding extra lines that could have been omitted
// by passing props.

let AddTodoFormXXX = ({onAddTodo}) => {

  const[inputText, setInputText] = useState("");
  

  let handleAddTodo = function (event){
    event.preventDefault(); // Prevent the default behaviour of the form submit.

    // Retrieves the value of the title element from 
    // the evenet target and store it in a variable named todoTitle.
    let todoTitle = inputText; 
    console.log(todoTitle);
    setInputText(event.target.value);
    setInputText(""); // Reset form onSubmit.
    onAddTodo(todoTitle); // Invokes onAddTodo callback prop and pass the todoTitle as an argument inside this handleAddTodo function
    
  };


  return (
    <form onSubmit={(event) => handleAddTodo(event)}>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" name="title" value = {inputText} onChange={(event) => setInputText(event.target.value)}></input>
        <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;