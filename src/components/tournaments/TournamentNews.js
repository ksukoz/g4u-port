import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourNews } from "../../actions/tournamentActions";
class TournamentNews extends Component {
  componentDidMount = () => {
    this.props.getTourNews(this.props.id);
  };

  render() {
    return <div>TournamentNews</div>;
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourNews }
)(TournamentNews);
