import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "react-materialize";
import { FormattedMessage } from "react-intl";
import news_bg from "./img/news_bg.png";
import { getCurrentNews } from "../../actions/newsActions";
import { Helmet } from "react-helmet";

class NewsItem extends Component {
  componentDidMount() {
    this.props.getCurrentNews(this.props.match.url.replace(/\D/g, ""));
  }
  render() {
    const { currentNews } = this.props.news;
    let newsCard;
    let newsTitle;
    let newsDesc;
    let newsImage;

    if (currentNews !== null) {
      newsCard = currentNews[0];
      newsTitle = newsCard.title;
      newsDesc = newsCard.text.slice(0, 300).replace(/<\/?[^>]+>/g, "");
      newsImage = newsCard.photo;
    }
    return (
      <section className="news-item">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{newsTitle}</title>
          <meta name="description" content={newsDesc} />
          <meta
            property="og:url"
            content={"mygame4u.com" + this.props.match.url}
          />
          <meta property="og:title" content={newsTitle} />
          <meta property="og:description" content={newsDesc} />
          <meta property="og:image" content={newsImage} />
        </Helmet>
        <div
          className="section-promo"
          style={{
            background: `url(${news_bg}) no-repeat`,
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col m9">
                <h1>
                  <FormattedMessage id="promo.heading" />
                </h1>
                <p>
                  <FormattedMessage id="promo.text" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Row>
            <Col s={12}>
              {newsCard ? (
                <Card>
                  <div className="news-content">
                    <h2 className="news-title">
                      <span>{newsCard.title}</span>
                      <small>{newsCard.date}</small>
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: newsCard.text
                      }}
                      className="news-text"
                    />
                    <a
                      href={`http://vk.com/share.php?url=${"mygame4u.com" +
                        this.props.match.url}&title=${
                        newsCard.title
                      }&description=${newsCard.text
                        .slice(0, 300)
                        .replace(/<\/?[^>]+>/g, "")}&image=${
                        newsCard.photo
                      }&noparse=true`}
                      target="_blank"
                    >
                      Vk
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${"mygame4u.com" +
                        this.props.match.url}`}
                      target="_blank"
                    >
                      Fb
                    </a>
                    <a
                      href={`https://twitter.com/share?url=${"mygame4u.com" +
                        this.props.match.url}&text=${newsCard.text
                        .slice(0, 300)
                        .replace(/<\/?[^>]+>/g, "")}`}
                      target="_blank"
                    >
                      Twitter
                    </a>
                  </div>
                  <img className="responsive-img" src={newsCard.photo} alt="" />
                </Card>
              ) : (
                ""
              )}
            </Col>
          </Row>
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
  { getCurrentNews }
)(NewsItem);
