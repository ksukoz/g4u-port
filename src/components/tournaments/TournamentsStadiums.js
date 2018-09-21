import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourStadiums } from "../../actions/tournamentActions";

class TournamentsStadiums extends Component {
  componentDidMount = () => {
    this.props.getTourStadiums(this.props.id);
  };

  render() {
    return <div>TournamentsStadiums</div>;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourStadiums }
)(TournamentsStadiums);
