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
  Dropdown,
  NavItem,
  Button
} from "react-materialize";
import news_bg from "../news/img/news_bg.png";
import ScoreBoard from "./img/scoreboard.svg";
import Football from "./img/football.svg";
import DateIcon from "./img/date.svg";

import { getTourInfo } from "../../actions/tournamentActions";

class TournamentMain extends Component {
  componentDidMount = () => {
    this.props.getTourInfo(this.props.match.params.id);
  };

  render() {
    const { tournament } = this.props.tournaments;
    let lastGamesList;
    let nextGamesList;

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      // centerPadding: "60px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    if (tournament) {
      lastGamesList = tournament.lastgames.map(game => (
        <div
          key={game.info.gameId}
          className="tournament-slide"
          // onClick={this.onSlideClickHandler.bind(this, subLeagues.current, i)}
        >
          <span className="tournament-slide-date">{game.info.date}</span>
          <div className="tournament-slide-game-wrap">
            <div className="tournament-slide-game">
              <img src={game.info.in.logo} alt="" />
              {game.info.in.title}
            </div>
            <span className="tournament-slide-score">{game.info.score}</span>
            <div className="tournament-slide-game">
              <img src={game.info.out.logo} alt="" />
              {game.info.out.title}
            </div>
          </div>
        </div>
      ));

      nextGamesList = tournament.begingames.map(game => (
        <div
          key={game.info.gameId}
          className="tournament-slide"
          // onClick={this.onSlideClickHandler.bind(this, subLeagues.current, i)}
        >
          <span className="tournament-slide-date">{game.info.date}</span>
          <div className="tournament-slide-game-wrap">
            <div className="tournament-slide-game">
              <img src={game.info.in.logo} alt="" />
              {game.info.in.title}
            </div>
            <span className="tournament-slide-score">{game.info.score}</span>
            <div className="tournament-slide-game">
              <img src={game.info.out.logo} alt="" />
              {game.info.out.title}
            </div>
          </div>
        </div>
      ));
    }

    return (
      <section className="section-tournament">
        <div
          className="promo"
          style={{
            background:
              // tournaments && tournaments.photo
              //   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
              //   :
              `url(${news_bg}) 0% 0% / cover  no-repeat`
            // backgroundSize: "cover"
          }}
        >
          <div className="container">
            <Row>
              <Tabs className="tournament-tabs">
                <Tab title="Последние матчи" active>
                  <div className="tournament-slider-wrap">
                    <Slider {...settings} {...this.props}>
                      {lastGamesList}
                    </Slider>
                  </div>
                </Tab>
                <Tab title="Ближайшие матчи">
                  <div className="tournament-slider-wrap">
                    <Slider {...settings} {...this.props}>
                      {nextGamesList}
                    </Slider>
                  </div>
                </Tab>
              </Tabs>
            </Row>
          </div>
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
  { getTourInfo }
)(TournamentMain);
