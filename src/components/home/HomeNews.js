import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import { Col, Card, CardTitle } from "react-materialize";
import { getMainNews } from "../../actions/newsActions";

class HomeNews extends Component {
  componentWillMount() {
    this.props.getMainNews();
  }

  render() {
    const { mainNews } = this.props.news;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let newsList;

    if (mainNews !== null) {
      newsList = mainNews.map(newsItem => (
        <Col m={7} s={12} key={newsItem.news_id}>
          <Card
            horizontal
            header={<CardTitle image={newsItem.photo ? newsItem.photo : ""} />}
            title={newsItem.title}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: `${newsItem.text.slice(0, 255)}...`
              }}
            />
            <Link className="news-card-link" to={`/news/${newsItem.news_id}`}>
              <FormattedMessage id="news.link" />
            </Link>
          </Card>
        </Col>
      ));
    }

    return (
      <section className="section-home-news">
        <div className="container">
          <h2 className="heading">
            <FormattedMessage id="news.heading" />
          </h2>
          <Slider {...settings} {...this.props}>
            {newsList}
          </Slider>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { getMainNews }
)(HomeNews);
