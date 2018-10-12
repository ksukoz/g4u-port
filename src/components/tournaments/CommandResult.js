import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourCommandResults } from "../../actions/tournamentActions";
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

class CommandResult extends Component {
  componentDidMount = () => {
    this.props.getTourCommandResults(this.props.id);
  };

  render() {
    return (
      <Row>
        <ResultsTable
          l={12}
          gamelist={
            this.props.tournaments && this.props.tournaments.commandResult
              ? this.props.tournaments.commandResult.calendar.gamelist
              : []
          }
          noFilter={true}
        />
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
  { getTourCommandResults }
)(CommandResult);
