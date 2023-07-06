import { useState } from "react";
import Menu from "./Menu";
import Head from "./Head";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import Tshirts from "./Tshirts";
import Shirts from "./Shirts";
import Hoodies from "./Hoodies";
import Pants from "./Pants";
import Shorts from "./Shorts";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Tshirts">
            <Tshirts />
          </Route>
          <Route path="/Shirts">
            <Shirts />
          </Route>
          <Route path="/Hoodies">
            <Hoodies />
          </Route>
          <Route path="/Pants">
            <Pants />
          </Route>
          <Route path="/Shorts">
            <Shorts />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
