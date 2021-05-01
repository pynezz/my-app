import logo from './logo.svg';
import './App.css';

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
      </header>
      <section className="sec-two">
          <div className="container">
            <div className="row">
              <p>
                1000
              </p>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
