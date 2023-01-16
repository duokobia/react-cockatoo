import React from 'react';

const todoList = [
  {
    id: 1,
    title: "Completed assignment",
  },
  {
    id: 2,
    title: "Remove the directory of Completed assignment",
  },
  {
    id: 3,
    title: "Re-do Coding assignment",
  },
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return <li key = {item.id}>{item.title}</li>
        })}
      </ul>
      </header>
    </div>
  );
}

export default App;
