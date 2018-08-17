import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Row, Col, Card } from "react-materialize";
import stats_bg from "./img/stats_bg.png";
import { getStats } from "../../actions/statsActions";

class Stats extends Component {
  state = {
    players: 0,
    commands: 0,
    leagues: 0,
    stadiums: 0,
    matchs: 0,
    tournaments: 0
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
    const {
      leagues,
      players,
      commands,
      stadiums,
      matchs,
      tournaments
    } = this.state;

    return (
      <section
        style={{ background: `url(${stats_bg})` }}
        className="section-stats"
      >
        <div className="container">
          <Row>
            <Col s={12} m={8} offset="m2">
              <h3>
                <FormattedMessage id="stats.heading" />
              </h3>
              <p>
                <FormattedMessage id="stats.paragraph" />
              </p>
            </Col>
          </Row>
          <Row className="stats-wrapper">
            <Col s={12} m={12}>
              <Card className="stats-card">
                <Row>
                  <Col s={2}>
                    <span className="stats-number">{this.state.leagues}</span>
                    <span className="stats-text">
                      <FormattedMessage
                        id="stats.leagues"
                        values={{ count: leagues }}
                      />
                    </span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">
                      {this.state.tournaments}
                    </span>
                    <span className="stats-text">
                      {/* <FormattedMessage id="stats.tournaments" /> */}
                      <FormattedMessage
                        id="stats.tournaments"
                        values={{ count: tournaments }}
                      />
                    </span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">{this.state.commands}</span>
                    <span className="stats-text">
                      {/* <FormattedMessage id="stats.commands" /> */}
                      <FormattedMessage
                        id="stats.commands"
                        values={{ count: commands }}
                      />
                    </span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">{this.state.players}</span>
                    <span className="stats-text">
                      {/* <FormattedMessage id="stats.players" /> */}
                      <FormattedMessage
                        id="stats.players"
                        values={{ count: players }}
                      />
                    </span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">{this.state.matchs}</span>
                    <span className="stats-text">
                      {/* <FormattedMessage id="stats.matchs" /> */}
                      <FormattedMessage
                        id="stats.matchs"
                        values={{ count: matchs }}
                      />
                    </span>
                  </Col>
                  <Col s={2}>
                    <span className="stats-number">{this.state.stadiums}</span>
                    <span className="stats-text">
                      {/* <FormattedMessage id="stats.stadiums" /> */}
                      <FormattedMessage
                        id="stats.stadiums"
                        values={{ count: stadiums }}
                      />
                    </span>
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
