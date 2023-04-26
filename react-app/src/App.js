import logo from "./logo.svg";
import "./App.css";
import {
  checkOriginForChild,
  childToParent,
  customEventChildToParent,
  setCustomEvent,
  setEvent,
} from "./massagechannle";
function App() {
  console.log(process.env.NODE_ENV)
  childToParent("from react app");
  if (process.env.NODE_ENV==='production'&&checkOriginForChild()) {
    setCustomEvent((message) => {
      console.log("CustomEvent ", message);
    });
    customEventChildToParent("from react app customEvent");
  }
  setEvent((message) => {
    console.log("message event", message);
  });

  return (
    <div className="App">
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

export default App;
