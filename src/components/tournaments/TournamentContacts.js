import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourContacts } from "../../actions/tournamentActions";

import {
  Row,
  Col,
  Input,
  Button,
  Collection,
  CollectionItem,
  CardPanel
} from "react-materialize";
import MatchesTable from "../common/MatchesTable";
import MainTable from "../common/MainTable";
import TournamentHeader from "./TournamentHeader";

class TournamentContacts extends Component {
  componentDidMount = () => {
    this.props.getTourContacts(this.props.match.params.id);
  };

  render() {
    const { contacts } = this.props.tournaments;

    return (
      <section className="section-tournament-main">
        <TournamentHeader id={this.props.match.params.id} />
        <div className="container">
          <Row>
            <Col s={12} l={8}>
              {/* <Row>{newsList}</Row> */}
            </Col>

            <Col s={12} l={4}>
              <MainTable
                l={12}
                title="Таблица"
                commands={
                  this.props.tournaments && this.props.tournaments.contacts
                    ? this.props.tournaments.contacts.table
                    : []
                }
              />
              <MatchesTable
                l={12}
                title="Последние матчи"
                games={
                  this.props.tournaments && this.props.tournaments.contacts
                    ? this.props.tournaments.contacts.lastgames
                    : []
                }
              />
              <MatchesTable
                l={12}
                title="Ближайшие матчи"
                games={
                  this.props.tournaments && this.props.tournaments.contacts
                    ? this.props.tournaments.contacts.begingames
                    : []
                }
              />
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tournaments: state.tournaments
});

export default connect(
  mapStateToProps,
  { getTourContacts }
)(TournamentContacts);
