import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Collection,
  CollectionItem,
  CardPanel
} from "react-materialize";

class TournamentMain extends Component {
  render() {
    const { tournament } = this.props.tournaments;
    let commandsList;
    let topPlayersList;
    let assistPlayersList;
    let begingamesList;
    let lastgamesList;

    if (tournament) {
      commandsList = tournament.commands.map((command, i) => (
        <tr key={command.command_id}>
          <td>{i + 1}</td>
          <td className="tournament-command-row">
            <img
              src={command.logo}
              alt=""
              style={{ height: 25, marginRight: 8 }}
            />
            <span>{command.title}</span>
          </td>
          <td>{command.games}</td>
          <td>{command.disgoals}</td>
          <td>{command.pts}</td>
        </tr>
      ));

      topPlayersList = tournament.topplayers.top.map((player, i) => (
        <CollectionItem key={i + Date.now()}>
          <div className="tournament-player-wrap">
            <img
              src={player.player.photo}
              alt=""
              className="tournament-player-photo"
            />
            <div>
              <h5>{player.player.name}</h5>
              <span>{player.command ? player.command.title : ""}</span>
            </div>
          </div>
          <span className="tournament-player-goal">{player.goal}</span>
        </CollectionItem>
      ));

      assistPlayersList = tournament.topplayers.assist.map((player, i) => (
        <CollectionItem key={i + Date.now()}>
          <div className="tournament-player-wrap">
            <img
              src={player.player.photo}
              alt=""
              className="tournament-player-photo"
            />
            <div>
              <h5>{player.player.name}</h5>
              <span>{player.command ? player.command.title : ""}</span>
            </div>
          </div>
          <span className="tournament-player-goal">{player.goal}</span>
        </CollectionItem>
      ));

      begingamesList = tournament.begingames.slice(0, 2).map(game => (
        <CollectionItem key={game.info.gameId}>
          <div className="tournament-tour-wrap">
            <span className="tournament-tour">{game.info.tour} тур</span>
            {game.info.date ? (
              <span className="tournament-date">{game.info.date}</span>
            ) : (
              ""
            )}
          </div>
          <div className="tournament-game-wrap">
            <div className="tournament-game">
              <span className="tournament-game-title">
                {game.info.in.title}
              </span>
              <img
                src={game.info.in.logo}
                alt=""
                className="tournament-game-logo"
              />
            </div>
            <span className="tournament-score">{game.info.score}</span>
            <div className="tournament-game">
              <img
                src={game.info.out.logo}
                alt=""
                className="tournament-game-logo"
              />
              <span className="tournament-game-title">
                {game.info.out.title}
              </span>
            </div>
          </div>
        </CollectionItem>
      ));

      lastgamesList = tournament.lastgames.slice(0, 2).map(game => (
        <CollectionItem key={game.info.gameId}>
          <div className="tournament-tour-wrap">
            <span className="tournament-tour">{game.info.tour} тур</span>
            {game.info.date ? (
              <span className="tournament-date">{game.info.date}</span>
            ) : (
              ""
            )}
          </div>
          <div className="tournament-game-wrap">
            <div className="tournament-game">
              <span className="tournament-game-title">
                {game.info.in.title}
              </span>
              <img
                src={game.info.in.logo}
                alt=""
                className="tournament-game-logo"
              />
            </div>
            <span className="tournament-score">{game.info.score}</span>
            <div className="tournament-game">
              <img
                src={game.info.out.logo}
                alt=""
                className="tournament-game-logo"
              />
              <span className="tournament-game-title">
                {game.info.out.title}
              </span>
            </div>
          </div>
        </CollectionItem>
      ));
    }

    return (
      <section className="section-tournament-main">
        <div className="container">
          {tournament ? <h3>{tournament.season.title}</h3> : ""}
          <Row>
            <Col s={12} l={6}>
              <table className="z-depth-2 highlight">
                <thead>
                  <tr className="tournament-table-head">
                    <th colSpan={5}>Таблица</th>
                  </tr>
                  <tr>
                    <th>Позиция</th>
                    <th>Клуб</th>
                    <th>И</th>
                    <th>РГ</th>
                    <th>О</th>
                  </tr>
                </thead>
                <tbody>{commandsList}</tbody>
              </table>
            </Col>
            <Col s={12} l={6}>
              <div>
                <div className="tournament-table-head">
                  <h3>Топ</h3>
                </div>
                <CardPanel>
                  <Tabs
                    className="tournament-table-tabs"
                    defaultValue="tab_120"
                    key={"tabs" + Date.now()}
                  >
                    <Tab title="Бомбардиры" active>
                      <Collection>{topPlayersList}</Collection>
                    </Tab>
                    <Tab title="Ассистенты">
                      <Collection>{assistPlayersList}</Collection>
                    </Tab>
                  </Tabs>
                </CardPanel>
              </div>
            </Col>
          </Row>
          <Row>
            <Col s={12} l={6}>
              <div>
                <div className="tournament-table-head">
                  <h3>Ближайшие матчи</h3>
                </div>
                <CardPanel className="tournament-game-card">
                  {begingamesList}
                </CardPanel>
              </div>
            </Col>
            <Col s={12} l={6}>
              <div>
                <div className="tournament-table-head">
                  <h3>Последние матчи</h3>
                </div>

                <CardPanel className="tournament-game-card">
                  {lastgamesList}
                </CardPanel>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  null
)(TournamentMain);
