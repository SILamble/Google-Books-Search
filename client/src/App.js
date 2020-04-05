import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;