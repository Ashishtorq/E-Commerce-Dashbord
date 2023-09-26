import { Fragment } from "react";
import "./App.css";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className="App">
          <h1>Its working</h1>
          <Nav></Nav>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
