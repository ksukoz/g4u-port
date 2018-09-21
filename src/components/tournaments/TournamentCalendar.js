import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourCalendar } from "../../actions/tournamentActions";

class TournamentCalendar extends Component {
  componentDidMount = () => {
    this.props.getTourCalendar(this.props.id);
  };

  render() {
    return <div>TournamentCalendar</div>;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourCalendar }
)(TournamentCalendar);
