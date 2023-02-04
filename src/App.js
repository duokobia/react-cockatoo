import React, {useState} from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = useState([]);

  // The spread operator and rest operator both have the same syntax(...).

  // JS spread operator allows you to literally spread all key/value pairs
  // of an object to another object. It happens on the right hand side of an
  // asssignment.

  // ### 1 ###
  // JS rest operator happens always as the last part of an object destructuring.
  // That is, on the left hand side of an asssignment. It is always used to 
  // separate an object, in this case, todoList, from some of its own properties,
  // or other properties, in this case, newTodo. In the code below, only the todoList 
  // item, i.e (rest or remaining item) gets the effect of the spread operator when 
  // setTodoList is invoked. Hence, this is a rest operator and not spread operator. 

  // ### 2 ###
  // AddTodoForm.js is a controlled component. This is because its state is managed
  // by its parent component(App.js). The parent component(App.js) provides the values
  // for the controlled component(AddTodoForm.js) through props(onAddTodo), and the 
  // controlled component(AddTodoForm.js) then triggers updates in the parent component
  // (App.js) through callback function(addTodo).


  let addTodo = function(newTodo){
    setTodoList([newTodo, ...todoList]); /* 1 */ 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>

      { /* 2 */ }
      <AddTodoForm onAddTodo = {addTodo}/> 
      <TodoList todoList = {todoList} />
    </div>
  );
};

export default App;


