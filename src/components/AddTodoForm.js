import React, {useState} from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./TodoListItem.module.css";
import PropTypes from 'prop-types';



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
        <button type = "submit">
          <span className={styles.AddButton}>Add</span>
        </button>
      </div>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func
};

export default AddTodoForm;
