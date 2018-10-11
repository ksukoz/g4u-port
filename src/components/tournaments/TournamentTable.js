import React, { Component } from "react";
import { connect } from "react-redux";
import { getTourTable } from "../../actions/tournamentActions";

import {
  Row,
  Col,
  Tabs,
  Tab,
  Collection,
  CollectionItem,
  CardPanel
} from "react-materialize";
import MatchesTable from "../common/MatchesTable";
import TournamentHeader from "./TournamentHeader";

class TournamentTable extends Component {
  componentDidMount = () => {
    this.props.getTourTable(this.props.match.params.id);
  };

  render() {
    const { table } = this.props.tournaments;
    let tableList;

    if (table) {
      tableList = table.table.map((item, i) => (
        <tr key={item.comId}>
          <td style={{ textAlign: "center" }}>{i + 1}</td>
          <td className="tournament-command-row">
            <img
              src={item.logo}
              alt=""
              style={{ height: 25, marginRight: 8 }}
            />
            <span>{item.title}</span>
          </td>
          <td>{item.cGame}</td>
          <td>{item.win}</td>
          <td>{item.draw}</td>
          <td>{item.lose}</td>
          <td>{item.scored}</td>
          <td>{item.missed}</td>
          <td>{item.diff}</td>
          <td>{item.pts}</td>
          <td>{+item.SfM.toFixed(2)}</td>
          <td>
            {item.game.map(gItem => (
              <span
                style={{
                  display: "inline-block",
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background:
                    gItem === "win"
                      ? "#259a4e"
                      : gItem === "lose"
                        ? "#ff0000"
                        : "#fff343",
                  margin: "0 3px"
                }}
              />
            ))}
          </td>
        </tr>
      ));
    }

    return (
      <section className="section-tournament-main">
        <TournamentHeader id={this.props.match.params.id} />
        <div className="container">
          {/* {tournament ? <h3>{tournament.season.title}</h3> : ''} */}
          <Row>
            <Col s={12} l={8}>
              <table className="z-depth-2 highlight">
                <thead>
                  <tr className="tournament-table-head">
                    <th colSpan={12}>Таблица</th>
                  </tr>
                  <tr>
                    <th style={{ textAlign: "center" }}>Поз</th>
                    <th>Клуб</th>
                    <th>И</th>
                    <th>В</th>
                    <th>Н</th>
                    <th>П</th>
                    <th>ЗГ</th>
                    <th>ПГ</th>
                    <th>РГ</th>
                    <th>О</th>
                    <th>ОзМ</th>
                    <th>Форма</th>
                  </tr>
                </thead>
                <tbody>{tableList}</tbody>
              </table>
            </Col>
            <MatchesTable
              l={4}
              title="Последние матчи"
              games={
                this.props.tournaments && this.props.tournaments.table
                  ? this.props.tournaments.table.lastgames
                  : []
              }
            />
            <MatchesTable
              l={4}
              title="Ближайшие матчи"
              games={
                this.props.tournaments && this.props.tournaments.table
                  ? this.props.tournaments.table.begingames
                  : []
              }
            />
          </Row>
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
  { getTourTable }
)(TournamentTable);
