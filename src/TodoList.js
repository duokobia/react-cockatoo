import React from "react";
import TodoListItem from "./TodoListItem";


const todoList = [
    {
      id: 1,
      title: "Complete ReactJs assignment",
    },
    {
      id: 2,
      title: "Complete NodeJs assignment",
    },
    {
      id: 3,
      title: "Read documentations for topics covered for the week for better understanding of each concept",
    },
    {
      id: 4,
      title: "Do personal coding assignments",
    },
    {
      id: 5,
      title: "Research difficult to grasp topics learnt and write personal notes as comments on each difficult to understand code block",
    },
    {
      id: 6,
      title: "Slack message my mentors and colleagues and book for sessions ahead",
    },
    {
      id: 7,
      title: "Plan for next week CTD classes and sessions",
    },
    {
      id: 8,
      title: "Check and reply e-mails",
    },
    {
      id: 9,
      title: "Continue my job search as a junior Frontend devloper",
    },
    {
      id: 10,
      title: "Work on interviewing tips",
    },
];


const TodoList = () => {
  return (
        <ul>
          {/* Each of the elements(objects) in the array("todoList") above is referred to as "todo" or whatever name I call it.
          I also tried using "list" and it worked just fine. The repetition of the name todo = {todo} confused me at first.
          So assign each of these elements("todo"s) inside the array("todoList") to the "todo" attribute.I also tried using "list",
          that is, instead of using (todo = {todo}), use (list = {todo}) to help you identify each parameter. 
          The "todoList" variable is passed to the "ToDoListItem" component under the name "todo" using the "todo" attribute (todo = {todo})
          or if you used "list" instead. So once the "ToDoListItem" component is instantiated, it assigns "todo" to the(its) "todo" HTML attribute
          or "list" attribute if you tried using (list = {todo}).
  
          After passing it to the "ToDoListItem" component, we can access it as "todo" property(or "list" if you tried using (list = {todo})) 
          from the props object in the "ToDoListItem" component's function signature using {props.todo.title} or {props.list.title}.

          JS map() method creates a new array from calling a function for every array element: 
          For every element("todo") in the array("todoList"), the todoList.map() function uses their unique identifiers("id"s)
          to get their "title"s and produce a list(<li>{props.todo.title}</li>) of "title"s that will be displayed in the "ToDoListItem" 
          component once instantiated. */}
          {todoList.map(todo => 
            <TodoListItem key = {todo.id} todo = {todo} /> 
          )}
        </ul>
  );
};

export default TodoList;