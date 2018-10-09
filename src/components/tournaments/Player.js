import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourPlayer } from "../../actions/tournamentActions";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Dropdown,
  NavItem,
  Navbar,
  Button,
  Input,
  Collection
} from "react-materialize";
import playerBg from "./img/player-bg.png";
import PlayerIcon from "./img/player.svg";
import CollectionItem from "react-materialize/lib/CollectionItem";

class Player extends Component {
  componentDidMount = () => {
    this.props.getTourPlayer(this.props.match.params.id);
  };

  render() {
    const { player } = this.props.tournaments;

    let gamesList;

    if (player) {
      gamesList = player.games.map((game, i) => (
        <tr key={i}>
          <td>{game.seaTitle}</td>
          <td>{game.tourTitle}</td>
          <td>
            <img src={game.comLogo} alt="" /> {game.comTitle}
          </td>
          <td>{game.plPos}</td>
          <td>{game.gCount}</td>
          <td>
            {game.goal}({game.penalty})
          </td>
          <td>{game.assist}</td>
          <td>{game.score}</td>
        </tr>
      ));
    }

    return (
      <section className="section-player">
        <div
          className="promo"
          style={{
            // tournaments && tournaments.photo
            //   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
            //   :
            background: `url(${playerBg}) 50% 50% / cover  no-repeat`
            // backgroundSize: "cover"
          }}
        >
          <div className="player-info">
            <div className="container">
              <Row>
                <Col m={10}>
                  {player ? (
                    <span className="player-number">{player.info.number}</span>
                  ) : (
                    ""
                  )}
                  <img
                    src={
                      player && player.header.photo
                        ? player.header.photo
                        : PlayerIcon
                    }
                    className="z-depth-2"
                    alt=""
                  />
                  <h1>
                    {player
                      ? `${player.header.name} ${player.header.patronymic} ${
                          player.header.surename
                        }`
                      : ""}
                  </h1>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="container player-wrap">
          <Row>
            <Col s={12} m={8}>
              <div className="player-game z-depth-1">
                <table className="highlight">
                  <thead>
                    <tr>
                      <th />
                      <th />
                      <th>Клуб</th>
                      <th>Поз</th>
                      <th>И</th>
                      <th>Г(П)</th>
                      <th>А</th>
                      <th>О</th>
                    </tr>
                  </thead>
                  <tbody>{gamesList}</tbody>
                </table>
              </div>
            </Col>
            <Col s={12} m={4}>
              <div className="player-data z-depth-1">
                <Collection className="player-data-list">
                  <CollectionItem className="player-data-item">
                    <span className="title">Команда:</span>
                    <span>{player ? player.info.title : ""}</span>
                  </CollectionItem>
                  <CollectionItem className="player-data-item">
                    <span className="title">Позиция:</span>
                    <span>{player ? player.info.desc : ""}</span>
                  </CollectionItem>
                  <CollectionItem className="player-data-item">
                    <span className="title">Номер:</span>
                    <span>{player ? player.info.number : ""}</span>
                  </CollectionItem>
                </Collection>
                <hr />
                <Collection className="player-data-list">
                  <CollectionItem className="player-data-item">
                    <span className="title">Дата рождения:</span>
                    <span>{player ? player.info.birthday : ""}</span>
                  </CollectionItem>
                  <CollectionItem className="player-data-item">
                    <span className="title">Возраст:</span>
                    <span>{player ? player.info.age : ""}</span>
                  </CollectionItem>
                  <CollectionItem className="player-data-item">
                    <span className="title">Рост:</span>
                    <span>{player ? player.info.stature : ""}</span>
                  </CollectionItem>
                  <CollectionItem className="player-data-item">
                    <span className="title">Вес:</span>
                    <span>{player ? player.info.weight : ""}</span>
                  </CollectionItem>
                  <CollectionItem className="player-data-item">
                    <span className="title">Нога:</span>
                    <span>{player ? player.info.leg : ""}</span>
                  </CollectionItem>
                </Collection>
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
  { getTourPlayer }
)(Player);
