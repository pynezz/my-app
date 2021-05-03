import './App.css';
import expand_icon from './icons/expand_less_white_24dp.svg';
import Form from './components/Form';
import TodoList from './components/TodoList'
import { useEffect, useState } from 'react';

// function ReactApp() {
//   return (
//     <div className="ReactApp">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// TodoList Credit: Dev Ed https://www.youtube.com/watch?v=pCA4qpQDZD8

function App() {

  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run ONCE when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Use effects
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);  // Every time these states changes, run this function

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Saving to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Section /> 
        <ExpandImage />
      </header>
      <section id="sec-two">
        <div className="container">
          <div className="row">
            <p>
              Påloggede spillere: 
                { Math.floor(Math.random() * 10) } 
                {/* Cool! ^  */}
            </p>
            <p>
              { inputText.toUpperCase() }
            </p>
          </div>
          <header>
            <h1>
              Gjøremål
            </h1>
          </header>
          <Form 
            todos        = { todos } 
            setTodos     = { setTodos }
            inputText    = { inputText }
            setInputText = { setInputText }
            setStatus    = { setStatus }            
          /> 
          <TodoList 
            setTodos     = { setTodos } 
            todos        = { todos }
            filteredTodos= { filteredTodos }
          />
        </div>
      </section>
    </div>
  );
}

function Expand() {
  var header = document.querySelector('App-header');
  header.classList.add('showFooterStats');
}

const Section = () => {
  return (
    <section id="sec-one">
      <div className="container container-top">
        <h1>Short, yet descriptive title</h1>
        <div className="row">
          <div id="item1">
            <button className="top-button">
              <a href="#">Button</a>
            </button>
          </div>
          <div id="item2">
            <button className="top-button">
              <a href="#">
                Button
              </a>
            </button>
          </div>
        </div>
      </div> 
    </section>
  );
}

function ExpandImage() {
  return (
    <img 
      src={expand_icon} 
      className="expand-icon" 
      alt="expand" 
      onClick={Expand}>
    </img>
  );  
}

export default App;
