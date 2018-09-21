import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourStats } from "../../actions/tournamentActions";

class TournamentStats extends Component {
  componentDidMount = () => {
    this.props.getTourStats(this.props.id);
  };

  render() {
    return <div>TournamentStats</div>;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourStats }
)(TournamentStats);
