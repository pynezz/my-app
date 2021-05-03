import React from "react"

const Form = () => {
    return (
    <form>
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">Alle</option>
                <option value="completed">Fullført</option>
                <option value="uncompleted">Ikke fullført</option>
            </select>
        </div>
    </form>
    );
}

export default Form;