import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourCommandCalendar } from "../../actions/tournamentActions";
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
import PlayersTop from "../common/PlayersTop";
import ResultsTable from "../common/ResultsTable";

class CommandCalendar extends Component {
  componentDidMount = () => {
    this.props.getTourCommandCalendar(this.props.id);
  };

  render() {
    const { team } = this.props.tournaments;

    let gamesList;
    let playersArr = [];
    let playersList;

    if (team) {
      playersList = team.consist.map(player => (
        <Col s={12} l={6}>
          <PlayersTop player={player} />
        </Col>
      ));
    }

    return (
      <Row>
        <ResultsTable
          l={8}
          gamelist={
            this.props.tournaments && this.props.tournaments.commandCalendar
              ? this.props.tournaments.commandCalendar.calendar.gamelist
              : []
          }
          noFilter={true}
        />
        <Col s={12} l={4}>
          <Row>
            <MainTable
              l={12}
              title="Таблица"
              commands={
                this.props.tournaments && this.props.tournaments.commandCalendar
                  ? this.props.tournaments.commandCalendar.commands
                  : []
              }
            />
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourCommandCalendar }
)(CommandCalendar);
