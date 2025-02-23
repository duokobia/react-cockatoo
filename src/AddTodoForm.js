import React, {useState} from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./TodoListItem.module.css";



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
      <div className={styles.InputForm}>
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
         <span className={styles.title}>Title</span> 
        </InputWithLabel> 
        <button type = "submit" className={styles.AddButton}>
          <span className={styles.buttonLabel}>Add</span>
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;