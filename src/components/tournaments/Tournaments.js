import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Row, Col, Card } from "react-materialize";
import news_bg from "../news/img/news_bg.png";

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
