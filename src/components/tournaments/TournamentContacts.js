import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourContacts } from "../../actions/tournamentActions";

class TournamentContacts extends Component {
  componentDidMount = () => {
    this.props.getTourContacts(this.props.id);
  };

  render() {
    return <div>TournamentContacts</div>;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourContacts }
)(TournamentContacts);
