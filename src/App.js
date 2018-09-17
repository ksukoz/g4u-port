import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConnectedIntlProvider from "./components/common/ConnectedIntlProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BookDetail from "./components/BookDetail";
import NewsItem from "./components/news/NewsItem";
import "./App.css";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Tournaments from "./components/tournaments/Tournaments";
import TournamentMain from "./components/tournaments/TournamentMain";

class App extends Component {
  render() {
    return (
      <ConnectedIntlProvider>
        <Router>
          <div className="App">
            <Route path="/" component={Header} />
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
              <Switch>
                <Route path="/book/:bookId" component={BookDetail} />
              </Switch>
              <Switch>
                <Route path="/news/:id" component={NewsItem} />
              </Switch>
              <Switch>
                <Route exact path="/news" component={News} />
              </Switch>
              <Switch>
                <Route exact path="/tournaments/:id" component={Tournaments} />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/:id"
                  component={TournamentMain}
                />
              </Switch>
            </main>
            <Route path="/" component={Footer} />
          </div>
        </Router>
      </ConnectedIntlProvider>
    );
  }
}

export default App;
