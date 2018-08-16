import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Row, Col, Card } from "react-materialize";
import stats_bg from "./img/stats_bg.png";
import { getStats } from "../../actions/statsActions";

class Stats extends Component {
  state = {
    players: "",
    commands: "",
    leagues: "",
    stadiums: "",
    matchs: "",
    tournaments: ""
  };

  componentWillMount() {
    this.props.getStats();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stats.stats !== null) {
      const { stats } = nextProps.stats;
      this.setState({
        ...this.state,
        players: stats.players,
        commands: stats.commands,
        leagues: stats.leagues,
        stadiums: stats.stadiums,
        matchs: stats.matchs,
        tournaments: stats.tournaments
      });
    }
  }

  render() {
    return (
      <section
        style={{ background: `url(${stats_bg})` }}
        className="section-stats"
      >
        <div className="container">
          <Row>
            <Col s={12} m={8} offset="m2">
              <h3>Аматорская футбольная лига MyGame4U</h3>
              <p>
                MyGame4U - це 2,5 роки досвіду в організації матчів та турнірів.
                За цей час було враховано і вирішено величезну кількість нюансів
                і помилок. Тепер ми з упевненістю можемо сказати, що робимо
                максимально круті турніри в Україні.
              </p>
            </Col>
          </Row>
          <Row className="stats-wrapper">
            <Col s={12} m={12}>
              <Card className="stats-card">
                <Row>
                  <Col s={2}>
                    <span className="stats-number">{this.state.leagues}</span>
                    <span className="stats-text">Лиги</span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">
                      {this.state.tournaments}
                    </span>
                    <span className="stats-text">Турниров</span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">{this.state.commands}</span>
                    <span className="stats-text">Команд</span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">{this.state.players}</span>
                    <span className="stats-text">Игроков</span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">{this.state.matchs}</span>
                    <span className="stats-text">Матчей</span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">{this.state.stadiums}</span>
                    <span className="stats-text">Поля</span>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats
});

export default connect(
  mapStateToProps,
  { getStats }
)(Stats);
