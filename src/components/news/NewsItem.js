import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, CardTitle, Icon } from "react-materialize";

import { getNews } from "../../actions/newsActions";

class NewsItem extends Component {
  componentWillMount() {
    this.props.getNews();
  }
  render() {
    const { news } = this.props.news;
    let newsCard;

    if (news !== null) {
      newsCard = news.filter(
        newsItem => newsItem.news_id == this.props.match.url.replace(/\D/g, "")
      )[0];
    }
    return (
      <div className="container">
        <Row>
          <Col s={12}>
            {newsCard ? (
              <Card>
                <h2 className="news-title">
                  <span className="left">{newsCard.title}</span>
                  <small className="right">{newsCard.date}</small>
                </h2>
                <p>{newsCard.text}</p>
                <img className="responsive-img" src={newsCard.photo} alt="" />
              </Card>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getNews }
)(NewsItem);
