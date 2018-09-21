import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourTable } from "../../actions/tournamentActions";

class TournamentTable extends Component {
  componentDidMount = () => {
    this.props.getTourTable(this.props.id);
  };

  render() {
    return <div>TournamentTable</div>;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourTable }
)(TournamentTable);
