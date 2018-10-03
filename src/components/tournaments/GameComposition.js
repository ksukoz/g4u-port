import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourGameComposition } from "../../actions/tournamentActions";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Dropdown,
  NavItem,
  Navbar,
  Button,
  Input
} from "react-materialize";
import news_bg from "../news/img/news_bg.png";

class GameComposition extends Component {
  componentDidMount = () => {
    this.props.getTourGameComposition(this.props.id);
  };

  render() {
    return (
      <div>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}

export default connect(
  // mapStateToProps,
  null,
  { getTourGameComposition }
)(GameComposition);
