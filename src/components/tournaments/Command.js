import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourCommand } from "../../actions/tournamentActions";
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
import MainTable from "../common/MainTable";
import MatchesTable from "../common/MatchesTable";
import CommandOverview from "./CommandOverview";
import CommandTeam from "./CommandTeam";
import CommandCalendar from "./CommandCalendar";

const initialState = {
  overview: false,
  team: false,
  calendar: false,
  results: false
};

class Command extends Component {
  state = {
    overview: true,
    team: false,
    calendar: false,
    results: false
  };

  onClickHandler = name => e => {
    this.setState({ ...initialState, [name]: true });
  };

  componentDidMount = () => {
    this.props.getTourCommand(this.props.match.params.id);
  };

  render() {
    const { command } = this.props.tournaments;

    let gamesList;
    let playersArr = [];
    let playersList;

    if (command) {
      for (let key in command.consist) {
        playersList = (
          <Collection className="command-data-list">
            <h3>{key}</h3>
            {command.consist[key].map(player => (
              <CollectionItem className="command-data-item">
                {player.number}. {player.name} {player.surename}
              </CollectionItem>
            ))}
          </Collection>
        );
        playersArr.push(playersList);
      }
    }

    return (
      <section className="section-command">
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
          <div className="command-info">
            <div className="container">
              <Row>
                <Col m={10}>
                  <img
                    src={
                      command && command.header.logo ? command.header.logo : ""
                    }
                    className="z-depth-2"
                    alt=""
                  />
                  <h1>{command ? command.header.title : ""}</h1>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tabs">
            <div
              className={`command-tab-wrap ${
                this.state.overview ? "active" : ""
              }`}
              onClick={this.onClickHandler("overview")}
            >
              Обзор
            </div>
            <div
              className={`command-tab-wrap ${this.state.team ? "active" : ""}`}
              onClick={this.onClickHandler("team")}
            >
              Состав
            </div>
            <div
              className={`command-tab-wrap ${
                this.state.calendar ? "active" : ""
              }`}
              onClick={this.onClickHandler("calendar")}
            >
              Календарь
            </div>
            <div
              className={`command-tab-wrap ${
                this.state.results ? "active" : ""
              }`}
              onClick={this.onClickHandler("results")}
            >
              Результаты
            </div>
          </div>

          {this.state.overview ? (
            <CommandOverview id={this.props.match.params.id} />
          ) : (
            ""
          )}
          {this.state.team ? (
            <CommandTeam id={this.props.match.params.id} />
          ) : (
            ""
          )}
          {this.state.calendar ? (
            <CommandCalendar id={this.props.match.params.id} />
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
  { getTourCommand }
)(Command);
