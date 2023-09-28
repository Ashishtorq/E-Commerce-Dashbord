import { Fragment } from "react";
import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
          <Route path="/" element={<h1>Welcome Home !!!</h1>}></Route>
          <Route path="/add-product" element={<h1>Add Products</h1>}></Route>
          <Route path="/update-product" element={<h1>Product Listing update</h1>}></Route>
          <Route path="/logout" element={<h1>You are logged out !!</h1>}></Route>
          <Route path="/profle" element={<h1>your profile</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
