import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Row, Col, Tabs, Tab } from "react-materialize";
import news_bg from "../news/img/news_bg.png";
import ScoreBoard from "./img/scoreboard.svg";
import Football from "./img/football.svg";
import DateIcon from "./img/date.svg";

import { getTourInfo } from "../../actions/tournamentActions";

class Tournaments extends Component {
  componentDidMount = () => {
    this.props.getTourInfo(this.props.match.params.id);
  };

  render() {
    return (
      <section className="section-tournaments">
        <div
          className="section-promo"
          style={{
            background:
              // tournaments && tournaments.photo
              //   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
              //   :
              `url(${news_bg}) 0% 0% / cover  no-repeat`
            // backgroundSize: "cover"
          }}
        >
          <div className="container">
            <Row>
              <Col m={9}>
                <h1>
                  <FormattedMessage id="promo.heading" />
                </h1>
                <p>
                  <FormattedMessage id="promo.text" />
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="container">
          <Row>
            <Tabs className="tournaments-tabs">
              <Tab
                title={
                  <div>
                    <div class="img-wrap">
                      <img src={ScoreBoard} alt="" />
                    </div>
                    Текущие
                  </div>
                }
              >
                Test 1
              </Tab>
              <Tab
                title={
                  <div>
                    <div class="img-wrap">
                      <img src={Football} alt="" />
                    </div>
                    Международные
                  </div>
                }
              >
                Test 2
              </Tab>
              <Tab
                title={
                  <div>
                    <div class="img-wrap">
                      <img src={DateIcon} alt="" />
                    </div>
                    Архив
                  </div>
                }
              >
                Test 3
              </Tab>
            </Tabs>
          </Row>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news,
  leagues: state.leagues
});

export default connect(
  mapStateToProps,
  { getTourInfo }
)(Tournaments);
