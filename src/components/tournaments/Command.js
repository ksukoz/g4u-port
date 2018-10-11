import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourCommand } from "../../actions/tournamentActions";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Dropdown,
  NavItem,
  Navbar,
  Button,
  Input,
  Collection
} from "react-materialize";
import playerBg from "./img/player-bg.png";
import PlayerIcon from "./img/player.svg";
import CollectionItem from "react-materialize/lib/CollectionItem";

class Command extends Component {
  componentDidMount = () => {
    this.props.getTourCommand(this.props.match.params.id);
  };

  render() {
    const { command } = this.props.tournaments;

    let gamesList;

    return (
      <section className="section-command">
        <div
          className="promo"
          style={{
            // tournaments && tournaments.photo
            //   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
            //   :
            background: `url(${playerBg}) 50% 50% / cover  no-repeat`
            // backgroundSize: "cover"
          }}
        >
          <div className="command-info">
            <div className="container">
              <Row>
                <Col m={10}>
                  <img
                    src={
                      command && command.header.logo ? command.header.logo : ""
                    }
                    className="z-depth-2"
                    alt=""
                  />
                  <h1>{command ? command.header.title : ""}</h1>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourCommand }
)(Command);
