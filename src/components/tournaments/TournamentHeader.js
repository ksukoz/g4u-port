import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
  Navbar,
  Button,
  Input
} from "react-materialize";
import news_bg from "../news/img/news_bg.png";
import ScoreBoard from "./img/scoreboard.svg";
import Football from "./img/football.svg";
import DateIcon from "./img/date.svg";

import { getTourInfo } from "../../actions/tournamentActions";

class TournamentHeader extends Component {
  onLeagueChangeHandler = e => {
    this.props.history.push(`/tournament/${e.target.value}`);
  };

  onClickHandler = id => e => {
    this.props.history.push(`/player/${id}`);
  };

  componentDidMount = () => {
    this.props.getTourInfo(this.props.id);
  };

  // componentDidUpdate = nextProps => {
  //   if (nextProps.location.pathname !== this.props.location.pathname) {
  //     this.props.getTourInfo(this.props.match.params.id);
  //   }
  // };

  render() {
    const { tournament } = this.props.tournaments;
    let lastGamesList;
    let nextGamesList;
    let tournamentsList;

    const settings = {
      className: "center",
      centerMode: true,
      infinite: tournament && tournament.lastgames.length < 4 ? false : true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };

    const settings2 = {
      className: "center",
      centerMode: true,
      infinite: tournament && tournament.begingames.length < 4 ? false : true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
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
      tournamentsList = tournament.tournirs.map(tour => (
        // <Link to={`/tournament/${tour.subId}`} key={tour.subId}>
        <option key={tour.subId} value={tour.subId}>
          {tour.title}
        </option>
        /* </Link> */
      ));
    }

    return (
      <section className="section-tournament">
        <div
          className="promo"
          style={{
            // tournaments && tournaments.photo
            //   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
            //   :
            background: `url(${news_bg}) 50% 50% / cover  no-repeat`
            // backgroundSize: "cover"
          }}
        >
          <div className="container">
            {/* <Row>
              <Input
                s={12}
                type="select"
                name="leagues"
                // label="Materialize Select"
                defaultValue={this.state.tournament}
                onChange={this.onLeagueChangeHandler}
              >
                <option value={0} disabled>
                  Турнир
                </option>
                {tournamentsList ? (
                  tournamentsList
                ) : (
                  <option value={0} disabled />
                )}
              </Input>
            </Row> */}
            <Row>
              <Tabs className="tournament-tabs" key={"tabs" + Date.now()}>
                <Tab title="Последние матчи" active>
                  <div className="tournament-slider-wrap">
                    <Slider {...settings} {...this.props}>
                      {lastGamesList}
                    </Slider>
                  </div>
                </Tab>
                <Tab title="Ближайшие матчи">
                  <div className="tournament-slider-wrap">
                    <Slider {...settings2} {...this.props}>
                      {nextGamesList}
                    </Slider>
                  </div>
                </Tab>
              </Tabs>
            </Row>
          </div>
          <div className="container">
            <Navbar className="transparent">
              <NavItem href={`/tournament/main/${this.props.id}`}>
                Главная
              </NavItem>
              <NavItem href={`/tournament/news/${this.props.id}`}>
                Новости
              </NavItem>
              <NavItem href={`/tournament/table/${this.props.id}`}>
                Таблица
              </NavItem>
              <NavItem href={`/tournament/calendar/${this.props.id}`}>
                Календарь
              </NavItem>
              <NavItem href={`/tournament/stats/${this.props.id}`}>
                Статистика
              </NavItem>
              <NavItem href={`/tournament/results/${this.props.id}`}>
                Результаты
              </NavItem>
              <NavItem href={`/tournament/clubs/${this.props.id}`}>
                Клубы
              </NavItem>
              <NavItem href={`/tournament/stadiums/${this.props.id}`}>
                Поля
              </NavItem>
              <NavItem href={`/tournament/contacts/${this.props.id}`}>
                Контакты
              </NavItem>
            </Navbar>
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
)(TournamentHeader);
