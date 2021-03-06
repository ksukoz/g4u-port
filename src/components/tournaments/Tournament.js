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
import TournamentMain from "./TournamentMain";
import TournamentNews from "./TournamentNews";
import TournamentTable from "./TournamentTable";
import TournamentCalendar from "./TournamentCalendar";
import TournamentStats from "./TournamentStats";
import TournamentResults from "./TournamentResults";
import TournamentClubs from "./TournamentClubs";
import TournamentsStadiums from "./TournamentsStadiums";
import TournamentContacts from "./TournamentContacts";

const initialState = {
  main: true,
  news: false,
  table: false,
  calendar: false,
  stats: false,
  results: false,
  clubs: false,
  stadiums: false,
  contacts: false
};

class Tournament extends Component {
  state = initialState;

  onTourNavClick = (e, component) => {
    e.preventDefault();
    this.clearState();

    this.setState({ main: false, [component]: true });
  };

  onLeagueChangeHandler = e => {
    this.props.history.push(`/tournament/${e.target.value}`);
  };

  onClickHandler = id => e => {
    this.props.history.push(`/player/${id}`);
  };

  clearState = () => {
    this.setState(initialState);
  };

  componentDidMount = () => {
    this.props.getTourInfo(this.props.match.params.id);
  };

  componentDidUpdate = nextProps => {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.getTourInfo(this.props.match.params.id);
    }
  };

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
            <Row>
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
            </Row>
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
            <Navbar className="transparent" id="1">
              <NavItem onClick={e => this.onTourNavClick(e, "main")}>
                Главная
              </NavItem>
              <NavItem onClick={e => this.onTourNavClick(e, "news")}>
                Новости
              </NavItem>
              <NavItem onClick={e => this.onTourNavClick(e, "table")}>
                Таблица
              </NavItem>
              <NavItem onClick={e => this.onTourNavClick(e, "calendar")}>
                Календарь
              </NavItem>
              <NavItem onClick={e => this.onTourNavClick(e, "stats")}>
                Статистика
              </NavItem>
              <NavItem onClick={e => this.onTourNavClick(e, "results")}>
                Результаты
              </NavItem>
              <NavItem onClick={e => this.onTourNavClick(e, "clubs")}>
                Клубы
              </NavItem>
              <NavItem onClick={e => this.onTourNavClick(e, "stadiums")}>
                Поля
              </NavItem>
              <NavItem onClick={e => this.onTourNavClick(e, "contacts")}>
                Контакты
              </NavItem>
            </Navbar>
          </div>
        </div>
        {this.state.main ? <TournamentMain /> : ""}
        {this.state.news ? (
          <TournamentNews id={this.props.match.params.id} />
        ) : (
          ""
        )}
        {this.state.table ? (
          <TournamentTable id={this.props.match.params.id} />
        ) : (
          ""
        )}
        {this.state.calendar ? (
          <TournamentCalendar id={this.props.match.params.id} />
        ) : (
          ""
        )}
        {this.state.stats ? (
          <TournamentStats
            id={this.props.match.params.id}
            onClickHandler={this.onClickHandler}
          />
        ) : (
          ""
        )}
        {this.state.results ? (
          <TournamentResults id={this.props.match.params.id} />
        ) : (
          ""
        )}
        {this.state.clubs ? (
          <TournamentClubs id={this.props.match.params.id} />
        ) : (
          ""
        )}
        {this.state.stadiums ? (
          <TournamentsStadiums id={this.props.match.params.id} />
        ) : (
          ""
        )}
        {this.state.contacts ? (
          <TournamentContacts id={this.props.match.params.id} />
        ) : (
          ""
        )}
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
)(Tournament);
