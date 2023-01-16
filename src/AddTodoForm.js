import React from "react";

const AddTodoForm = () => {
  return (
    <form>
        <label>Title</label>
        <input htmlFor="todoTitle" id="todoTitle"></input>
        <button>Add</button>
    </form>
  );
};

export default AddTodoForm;