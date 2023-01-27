import React, {useState} from "react";


let AddTodoForm = ({onAddTodo}) => {

  // const[inputText, setInputText] = useState("");
  

  let handleAddTodo = function (event){
    event.preventDefault(); // Prevents the default behaviour of the form submit.
   
    // Retrieves the value of the title passed into the input tag by assessing it using the "name" attribute renamed as "title"
    // (name="title"), and storing it inside the variable "todoTitle".
    // By using "let todoTitle = event.target.title.value;", the app didn't work because the variable is a constant value.
    const todoTitle = event.target.title.value; 
    console.log(todoTitle);
    event.target.reset();// Reset form onSubmit.

    // The setter function "setNewTodo" has being passed as a prop under the name "onAddTodo" to the AddTodoForm.js 
    // component inside the "App.js" component. The "onAddTodo", which is a callback function inside this "handleAddTodo"
    // function, accepts the variable "todoTitle" as an argument here inside the AddTodoForm.js component(From the form below).
    // Once invoked, the "onAddTodo" function grabs the "todoTitle" variable from the form, then renders the value stored inside
    // "todoTitle" in the AddTodoForm.js component nested inside the App.js using the setter function "setNewTodo". This is
    // because the "onAddTodo" function was set as this setter function in the App.js while being passed as a prop to the
    // AddTodoForm.js component. So in this case, the real functionality passed down from the App.js component(parent), to the 
    // AddTodoForm.js component(child), is the setter function "setNewTodo".
    onAddTodo(todoTitle);

   

  };


  return (
    <form onSubmit={(event) => handleAddTodo(event)}>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" name="title"></input>
        <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;