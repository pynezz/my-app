import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	const inputTextHandler = (e) => {
    setInputText(e.target.value);
	};
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {
        text:       inputText,
        completed:  false,
        id:         Math.floor(Math.random() * 10000)
      },
    ]);
    setInputText("");
  }
	return (
		<form>
			<input 
        value       = { inputText }
        onChange    = { inputTextHandler } 
        type="text" 
        className="todo-input" 
      />
			<button 
        onClick     = { submitTodoHandler } 
        className="todo-button" 
        type="submit"
      >
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select className="todos" className="filter-todo">
					<option value="all">Alle</option>
					<option value="completed">Fullført</option>
					<option value="uncompleted">Ikke fullført</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
