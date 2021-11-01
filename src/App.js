import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Search from "./components/SearchBox/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='main'>
        <Header />
        <div className='wrapper'>
          <Switch>
            <Route exact path='/' component={Search} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
