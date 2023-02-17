import React, { Fragment, useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

// ### Side Effects ###

// Side effects are produced by impure functions. They result as a consequence of the
// actions of impure functions. It is an effect outside of the function which isn't 
// captured directly in its return value. In this implementation, the side effects is
// includes:

// ### 1 ###
// Default state variable stored in localStorage using conditional(ternary) operator
// to handle string and null primitive data type values.

// ### 2 ###
// Changing of the DOM by the useState() hook in the custom hook.

function useSemiPersistentState() {
  
  const persistentList = localStorage.getItem("savedTodoList")
  ? JSON.parse(localStorage.getItem("savedTodoList"))
  : [];  // * 1 * //

  const [todoList, setTodoList] = useState(persistentList);

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList]); 

  return [todoList, setTodoList];

};


function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  let addTodo = function(newTodo){
    setTodoList([newTodo, ...todoList]);  // * 2 * //
  };

  let removeTodo = function(objectID){
    const filteredTodoList = todoList.filter((todo) => todo.objectID !== objectID
    );
    // The filter() method creates a new array filled with elements that pass the condition provided in it.
    // This means that the filter applies to only the todo item whose id matches the id accepted as argument.
    // The array is traverse and only the todo element whose id matches that accepted as argument will be filtered.

    setTodoList(filteredTodoList);
  };

  return (
    <Fragment style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo = {addTodo}/> 
      <TodoList todoList = {todoList} onRemoveTodo = {removeTodo} />
    </Fragment>
  );
};

export default App;


