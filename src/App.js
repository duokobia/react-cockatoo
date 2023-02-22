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

// ### 3 ###
// The filter() method creates a new array of elements that passed the condition provided in it.
// The existing array is traversed and only the todo element whose id matches the argument accepted,
// is filtered out. This new array is then passed as an argument for the setter function.


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
  
  let removeTodo = function(id){
    const filteredTodoList = todoList.filter((todo) => todo.id !== id); // * 3 * //
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


