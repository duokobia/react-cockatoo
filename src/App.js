import React, { Fragment, useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./components/TodoListItem.module.css";




function App() {

  
  const [todoList, setTodoList] = useState(() => {
        return JSON.parse(localStorage.getItem("savedTodoList")) || []
  });
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: "GET",
      headers:{
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }).then((response) => response.json()).then((result) => {
      console.log(result.records);
      setTodoList(result.records);
      setIsLoading(false);
    })
    .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if(!isLoading){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [isLoading, todoList]); 

  let addTodo = function(newTodo){
    setTodoList([newTodo, ...todoList]);  
  };
  
  let removeTodo = function(id){
    const filteredTodoList = todoList.filter((todo) => todo.id !== id); 
    setTodoList(filteredTodoList);
  };
    

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Fragment>
            <div className={styles.container}>  
              <h1 className={styles.AppBackground}>Todo List</h1>
              <AddTodoForm onAddTodo = {addTodo}/> 
              { isLoading ? (
                <p className={styles.loadingText}>Loading...</p>
                ):(
                  <TodoList todoList = {todoList} onRemoveTodo = {removeTodo} />
                  )}
            </div>
          </Fragment>
        }>
        </Route>
        <Route exact path="/new" element={<h1>New Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
  
  );
};


export default App;


