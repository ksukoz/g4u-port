import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  Row,
  Col,
  Tabs,
  Tab,
  Dropdown,
  NavItem,
  Button,
  Input,
  CardPanel
} from "react-materialize";

class TournamentMain extends Component {
  render() {
    const { tournament } = this.props.tournaments;
    let commandsList;

    if (tournament) {
      commandsList = tournament.commands.map((command, i) => (
        <tr key={command.command_id}>
          <td>{i + 1}</td>
          <td className="tournament-command-row">
            <img
              src={command.logo}
              alt=""
              style={{ height: 25, marginRight: 8 }}
            />
            <span>{command.title}</span>
          </td>
          <td />
          <td>{command.disgoals}</td>
          <td>{command.pts}</td>
        </tr>
      ));
    }

    return (
      <section className="section-tournament-main">
        <div className="container">
          <Row>
            <Col m={6}>
              <table className="responsive-table  z-depth-2">
                <thead>
                  <tr className="tournament-table-head">
                    <th colSpan={5}>Таблица</th>
                  </tr>
                  <tr>
                    <th>Позиция</th>
                    <th>Клуб</th>
                    <th>И</th>
                    <th>РГ</th>
                    <th>О</th>
                  </tr>
                </thead>
                <tbody>{commandsList}</tbody>
              </table>
            </Col>
            <Col m={6}>
              <div>
                <div className="tournament-table-head">
                  <h3>Топ</h3>
                </div>
                <CardPanel>
                  <Tabs className="tournament-table-tabs">
                    <Tab title="Последние матчи" active>
                      <div className="tournament-slider-wrap">
                        {/* <Slider {...settings} {...this.props}>
                          {lastGamesList}
                        </Slider> */}
                      </div>
                    </Tab>
                    <Tab title="Ближайшие матчи">
                      <div className="tournament-slider-wrap">
                        {/* <Slider {...settings} {...this.props}>
                          {nextGamesList}
                        </Slider> */}
                      </div>
                    </Tab>
                  </Tabs>
                </CardPanel>
              </div>
            </Col>
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
  null
)(TournamentMain);
