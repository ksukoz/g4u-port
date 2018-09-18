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

import { getSeasonsInfo } from "../../actions/tournamentActions";

class Tournaments extends Component {
  state = {
    seasonsList: null
  };

  onSlideClickHandler = (array, index) => {
    this.setState({
      ...this.state,
      seasonsList: array[index].seasons
    });
  };

  componentDidMount = () => {
    this.props.getSeasonsInfo(this.props.match.params.id);
  };

  render() {
    const { subLeagues } = this.props.tournaments;
    let currentList;
    let internationalList;
    let arhiveList;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    if (subLeagues) {
      currentList = subLeagues.current.map((tournament, i) => (
        <div
          key={tournament.tId}
          onClick={this.onSlideClickHandler.bind(this, subLeagues.current, i)}
        >
          <img src={tournament.logo} alt="" />
          {tournament.title}
        </div>
      ));
      internationalList = subLeagues.international.map((tournament, i) => (
        <div
          key={tournament.tId}
          onClick={this.onSlideClickHandler.bind(
            this,
            subLeagues.international,
            i
          )}
        >
          <img src={tournament.logo} alt="" />
          {tournament.title}
        </div>
      ));
      arhiveList = subLeagues.arhive.map((tournament, i) => (
        <div
          key={tournament.tId}
          onClick={this.onSlideClickHandler.bind(this, subLeagues.arhive, i)}
        >
          <img src={tournament.logo} alt="" />
          {tournament.title}
        </div>
      ));
    }

    return (
      <section className="section-tournaments">
        <div
          className="section-promo"
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
              <Col m={9}>
                <h1>
                  <FormattedMessage id="promo.heading" />
                </h1>
                <p>
                  <FormattedMessage id="promo.text" />
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="container">
          <Row>
            <Tabs className="tournaments-tabs" key={"tabs" + Date.now()}>
              <Tab
                title={
                  <div>
                    <div className="img-wrap">
                      <img src={ScoreBoard} alt="" />
                    </div>
                    Текущие
                  </div>
                }
                active
              >
                <Row class="tournaments-slider z-depth-1">
                  <Slider {...settings} {...this.props}>
                    {currentList}
                  </Slider>
                  <ul>
                    {this.state.seasonsList
                      ? this.state.seasonsList.map(season => (
                          <Dropdown
                            trigger={
                              <Button className="white black-text">
                                {season.title}
                              </Button>
                            }
                            key={season.sId}
                          >
                            <option value="" disabled>
                              Выбрать сезон
                            </option>
                            {season.tours.map(tour => (
                              <Link
                                to={`/tournament/${tour.stId}`}
                                key={tour.stId}
                              >
                                <NavItem>{tour.title}</NavItem>
                              </Link>
                            ))}
                          </Dropdown>
                          // <li>
                          //   <Link to={`/seasons/${season.sId}`}>
                          //     {season.title}
                          //   </Link>
                          // </li>
                        ))
                      : ""}
                  </ul>
                </Row>
              </Tab>
              <Tab
                title={
                  <div>
                    <div class="img-wrap">
                      <img src={Football} alt="" />
                    </div>
                    Международные
                  </div>
                }
              >
                {internationalList}
              </Tab>
              <Tab
                title={
                  <div>
                    <div class="img-wrap">
                      <img src={DateIcon} alt="" />
                    </div>
                    Архив
                  </div>
                }
              >
                {arhiveList}
              </Tab>
            </Tabs>
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
  { getSeasonsInfo }
)(Tournaments);
