import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourResults } from "../../actions/tournamentActions";

class TournamentResults extends Component {
  componentDidMount = () => {
    this.props.getTourResults(this.props.id);
  };

  render() {
    return <div>TournamentResults</div>;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourResults }
)(TournamentResults);
