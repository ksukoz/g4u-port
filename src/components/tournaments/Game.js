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
    this.setState({ [name]: true });
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
                <div className="img-wrap">Составы</div>
              </NavItem>
              <NavItem onClick={this.onClickHandler("events")}>
                <div class="img-wrap">События</div>
              </NavItem>
              <NavItem onClick={this.onClickHandler("media")}>
                <div class="img-wrap">Медиа</div>
              </NavItem>
            </Navbar>
            {/* <Tabs className="tournaments-tabs" key={"tabs" + Date.now()}>
              <Tab
                title={
                  <div>
                    <div className="img-wrap">Составы</div>
                  </div>
                }
                onChange={this.onClickHandler("compositions")}
                active
              />
              <Tab
                title={
                  <div>
                    <div class="img-wrap">События</div>
                  </div>
                }
                onChange={this.onClickHandler("events")}
              />
              <Tab
                title={
                  <div>
                    <div class="img-wrap">Медиа</div>
                  </div>
                }
                onChange={this.onClickHandler("media")}
              />
            </Tabs> */}
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
  { getTourGame }
)(Game);
