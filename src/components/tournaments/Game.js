import React, { Component } from "react";
import { connect } from "react-redux";

import { getTourGame } from "../../actions/tournamentActions";

class Game extends Component {
  componentDidMount = () => {
    this.props.getTourGame(this.props.match.params.id);
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourGame }
)(Game);
