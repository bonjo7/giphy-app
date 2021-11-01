import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
