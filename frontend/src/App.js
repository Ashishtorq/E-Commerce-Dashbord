import { Fragment } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <Nav></Nav>

          <Footer></Footer>
          <Routes>
            <Route path="/" element={<h1>Welcome Home !!!</h1>}></Route>
            <Route
              path="/product"
              element={<h1>Get New Products here</h1>}
            ></Route>
            <Route path="/add-product" element={<h1>Add Products</h1>}></Route>
            <Route
              path="/update-product"
              element={<h1>Product Listing update</h1>}
            ></Route>
            <Route
              path="/logout"
              element={<h1>You are logged out !!</h1>}
            ></Route>
            <Route path="/profle" element={<h1>your profile</h1>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
