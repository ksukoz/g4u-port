import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourGame } from "../../actions/tournamentActions";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Dropdown,
  NavItem,
  Navbar,
  Button,
  Input
} from "react-materialize";
import news_bg from "../news/img/news_bg.png";
import GameComposition from "./GameComposition";

const initialState = {
  compositions: false,
  events: false,
  media: false
};

class Game extends Component {
  state = {
    compositions: true,
    events: false,
    media: false
  };

  onClickHandler = name => e => {
    this.setState({ ...initialState, [name]: true });
  };

  componentDidMount = () => {
    this.props.getTourGame(this.props.match.params.id);
  };

  render() {
    const { game } = this.props.tournaments;

    let gameInfo;

    if (game !== null) {
      gameInfo = (
        <div className="container">
          <div className="gameinfo">
            <Row>
              <div className="gameinfo-game">
                <h3>{game.title}</h3>
                <div className="gameinfo-game-wrap">
                  <h2>{game.titleIn}</h2>
                  <img src={game.logoIn} alt="" />
                  <span>{game.scored}</span>
                  <img src={game.logoOut} alt="" />
                  <h2>{game.titleOut}</h2>
                </div>
              </div>
            </Row>
            <Row>
              {game.assist.map(item => (
                <Col m={2}>
                  <div className="gameinfo-person">
                    <h3>{item.type_ru}:</h3>
                    <p>{item.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      );
    }

    return (
      <section className="section-game">
        <div
          className="promo"
          style={{
            background:
              // tournaments && tournaments.photo
              //   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
              //   :
              `url(${news_bg}) 50% 50% / cover  no-repeat`
            // backgroundSize: "cover"
          }}
        >
          {gameInfo}
        </div>
        <div className="container">
          <Row>
            <Navbar className="transparent z-depth-0">
              <NavItem onClick={this.onClickHandler("compositions")}>
                <div
                  className={`img-wrap ${
                    this.state.compositions ? "active" : ""
                  }`}
                >
                  Составы
                </div>
              </NavItem>
              <NavItem onClick={this.onClickHandler("events")}>
                <div
                  className={`img-wrap ${this.state.events ? "active" : ""}`}
                >
                  События
                </div>
              </NavItem>
              <NavItem onClick={this.onClickHandler("media")}>
                <div className={`img-wrap ${this.state.media ? "active" : ""}`}>
                  Медиа
                </div>
              </NavItem>
            </Navbar>
          </Row>
          {this.state.compositions ? (
            <GameComposition id={this.props.match.params.id} />
          ) : (
            ""
          )}
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
  { getTourGame }
)(Game);
