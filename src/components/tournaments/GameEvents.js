import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getTourGameEvents } from "../../actions/tournamentActions";
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
import CollectionItem from "react-materialize/lib/CollectionItem";

class GameEvents extends Component {
  componentDidMount = () => {
    this.props.getTourGameEvents(this.props.id);
  };

  render() {
    const { events } = this.props.tournaments;
    let eventsList;

    if (events !== null) {
      eventsList = events.events.map(
        event =>
          event.evType === "up" ? (
            <div className="game-events-item game-events-item-left">
              <div className="game-events-item-desc">
                <h2>
                  {event.plId && event.plId !== "0" ? (
                    <Link to={`/player/${event.plId}`}>
                      {event.title}, <b>{event.minute}'</b>
                    </Link>
                  ) : (
                    <span>
                      {event.title}, <b>{event.minute}'</b>
                    </span>
                  )}
                </h2>
                <p>
                  {event.asId && event.asId !== "0" ? (
                    <Link to={`/player/${event.asId}`}>{event.astitle}</Link>
                  ) : (
                    <span>{event.astitle}</span>
                  )}
                  <Link to={`/player/${event.asId}`}>{event.astitle}</Link>
                  <br />
                  {event.comment}
                </p>
              </div>
              <div className="game-events-item-type">
                <img src={event.icon} alt="" />
              </div>
            </div>
          ) : (
            <div className="game-events-item game-events-item-right">
              <div className="game-events-item-type">
                <img src={event.icon} alt="" />
              </div>
              <div className="game-events-item-desc">
                <h2>
                  {event.plId && event.plId !== "0" ? (
                    <Link to={`/player/${event.plId}`}>
                      {event.title}, <b>{event.minute}'</b>
                    </Link>
                  ) : (
                    <span>
                      <b>{event.minute}'</b>, {event.title}
                    </span>
                  )}
                </h2>
                <p>
                  {event.asId && event.asId !== "0" ? (
                    <Link to={`/player/${event.asId}`}>{event.astitle}</Link>
                  ) : (
                    <span>{event.astitle}</span>
                  )}
                  <br />
                  {event.comment}
                </p>
              </div>
            </div>
          )
      );
    }

    return (
      <div className="game-events">
        <div className="container">
          <Row>
            <Col s={12}>
              <div className="game-events-list">{eventsList}</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments
});

export default connect(
  mapStateToProps,
  // null,
  { getTourGameEvents }
)(GameEvents);
