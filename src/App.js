import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ConnectedIntlProvider from "./components/common/ConnectedIntlProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BookDetail from "./components/BookDetail";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";

// let i18nConfig = {
//   locale: 'en',
//   messages: intlMessages
// };

class App extends Component {
  render() {
    return (
      <ConnectedIntlProvider>
        <Router>
          <div className="App">
            <Route path="/" component={Header} />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route path="/book/:bookId" component={BookDetail} />
            </Switch>
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p> */}
            <Route path="/" component={Footer} />
          </div>
        </Router>
      </ConnectedIntlProvider>
    );
  }
}

export default App;
