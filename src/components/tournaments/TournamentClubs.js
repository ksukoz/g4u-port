import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourClubs } from "../../actions/tournamentActions";

class TournamentClubs extends Component {
  componentDidMount = () => {
    this.props.getTourClubs(this.props.id);
  };

  render() {
    return <div>TournamentClubs</div>;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourClubs }
)(TournamentClubs);
