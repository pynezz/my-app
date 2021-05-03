import logo from './logo.svg';
import './App.css';
import expand_icon from './icons/expand_less_white_24dp.svg';
import Form from './components/Form';

function ReactApp() {
  return (
    <div className="ReactApp">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Section></Section>
        <section id="sec-one">
          <div className="container container-top">
            <h1>Short yet descriptive title</h1>
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
        <img src={expand_icon} className="expand-icon" alt="expand" onClick={Expand}></img>
      </header>
      <section className="sec-two">
          <div className="container">
            <div className="row">
              <p>
                1000
              </p>
            </div>
          </div>
          <Form />
        </section>
    </div>
  );
}

function Expand() {
  var header = document.querySelector('App-header');
  header.classList.add('showFooterStats');
}

function Section(props) {
  return null
}

export default App;
