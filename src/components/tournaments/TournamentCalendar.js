import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getTourCalendar,
  getFilteredCalendar
} from "../../actions/tournamentActions";

import {
  Row,
  Col,
  Input,
  Button,
  Collection,
  CollectionItem,
  CardPanel
} from "react-materialize";
import MatchesTable from "../common/MatchesTable";

import MainTable from "../common/MainTable";
import ResultsTable from "../common/ResultsTable";
import TournamentHeader from "./TournamentHeader";

class TournamentCalendar extends Component {
  state = {
    tour: 0,
    club: 0,
    stadium: 0
  };

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    this.props.getFilteredCalendar(
      this.props.id,
      this.state.tour !== 0 ? `tour=${this.state.tour}` : "",
      this.state.club !== 0 ? `comId=${this.state.club}` : "",
      this.state.stadium !== 0 ? `stadId=${this.state.stadium}` : ""
    );
  };

  onClearClickHadler = () => {
    this.props.getTourCalendar(this.props.id);

    this.setState({
      tour: 0,
      club: 0,
      stadium: 0
    });
  };

  componentDidMount = () => {
    this.props.getTourCalendar(this.props.match.params.id);
  };

  render() {
    const { calendar } = this.props.tournaments;

    return (
      <section className="section-tournament-main">
        <TournamentHeader id={this.props.match.params.id} />
        <div className="container">
          <Row>
            <ResultsTable
              l={8}
              stateTour={this.state.tour}
              onChangeHandler={this.onChangeHandler}
              stateClub={this.state.club}
              stateStadium={this.state.stadium}
              tour={calendar !== null ? calendar.calendar.filter.tour : []}
              clubs={calendar !== null ? calendar.calendar.filter.commands : []}
              stadiums={
                calendar !== null ? calendar.calendar.filter.statiums : []
              }
              onClearClickHadler={this.onClearClickHadler}
              gamelist={calendar !== null ? calendar.calendar.gamelist : []}
            />

            <Col s={12} l={4}>
              <MainTable
                l={12}
                title="Таблица"
                commands={
                  this.props.tournaments && this.props.tournaments.calendar
                    ? this.props.tournaments.calendar.table
                    : []
                }
              />
              <MatchesTable
                l={12}
                title="Последние матчи"
                games={
                  this.props.tournaments && this.props.tournaments.calendar
                    ? this.props.tournaments.calendar.lastgames
                    : []
                }
              />
              <MatchesTable
                l={12}
                title="Ближайшие матчи"
                games={
                  this.props.tournaments && this.props.tournaments.calendar
                    ? this.props.tournaments.calendar.begingames
                    : []
                }
              />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments
});

export default connect(
  mapStateToProps,
  { getTourCalendar, getFilteredCalendar }
)(TournamentCalendar);
