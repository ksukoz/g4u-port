import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConnectedIntlProvider from "./components/common/ConnectedIntlProvider";
import { Helmet } from "react-helmet";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BookDetail from "./components/BookDetail";
import NewsItem from "./components/news/NewsItem";
import "./App.css";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Tournaments from "./components/tournaments/Tournaments";
import Tournament from "./components/tournaments/Tournament";
import Game from "./components/tournaments/Game";
import Player from "./components/tournaments/Player";
import Command from "./components/tournaments/Command";
import TournamentMain from "./components/tournaments/TournamentMain";
import TournamentNews from "./components/tournaments/TournamentNews";
import TournamentTable from "./components/tournaments/TournamentTable";
import TournamentCalendar from "./components/tournaments/TournamentCalendar";
import TournamentStats from "./components/tournaments/TournamentStats";
import TournamentResults from "./components/tournaments/TournamentResults";
import TournamentClubs from "./components/tournaments/TournamentClubs";
import TournamentsStadiums from "./components/tournaments/TournamentsStadiums";
import TournamentContacts from "./components/tournaments/TournamentContacts";

class App extends Component {
  render() {
    return (
      <ConnectedIntlProvider>
        <Router>
          <div className="App">
            <Route path="/" component={Header} />
            <Helmet titleTemplate="MyGame4U - %s">
              <meta charSet="utf-8" />
              <title>MyGame4U</title>
              <link rel="canonical" href="http://mygame4u.com" />
            </Helmet>
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
                  path="/tournament/main/:id"
                  component={TournamentMain}
                />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/news/:id"
                  component={TournamentNews}
                />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/table/:id"
                  component={TournamentTable}
                />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/calendar/:id"
                  component={TournamentCalendar}
                />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/stats/:id"
                  component={TournamentStats}
                />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/results/:id"
                  component={TournamentResults}
                />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/clubs/:id"
                  component={TournamentClubs}
                />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/stadiums/:id"
                  component={TournamentsStadiums}
                />
              </Switch>
              <Switch>
                <Route
                  exact
                  path="/tournament/contacts/:id"
                  component={TournamentContacts}
                />
              </Switch>
              <Switch>
                <Route exact path="/game/:id" component={Game} />
              </Switch>
              <Switch>
                <Route exact path="/player/:id" component={Player} />
              </Switch>
              <Switch>
                <Route exact path="/command/:id" component={Command} />
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
