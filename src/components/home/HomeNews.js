import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import { Col, Card, CardTitle, Icon } from "react-materialize";
import { getNews } from "../../actions/newsActions";

const PrevArrow = () => {
  return <Icon>arrow_right_alt</Icon>;
};

class HomeNews extends Component {
  componentWillMount() {
    this.props.getNews();
  }

  render() {
    const { news } = this.props.news;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let newsList;

    if (news !== null) {
      newsList = news.map(newsItem => (
        <Col m={7} s={12} key={newsItem.news_id}>
          <Card
            horizontal
            header={<CardTitle image={newsItem.photo} />}
            title={newsItem.title}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: `${newsItem.text.slice(0, 255)}...`
              }}
            />
          </Card>
        </Col>
        // <div className="row" key={newsItem.news_id}>
        //   <div className="col s12 m10 offset-m1">
        //     <div className="card">
        //       <div className="card-content">
        //         <div className="card-title-wrap">
        //           <h2 className="card-title">{newsItem.title}</h2>
        //           <span>{newsItem.date}</span>
        //         </div>
        //         <p>{`${newsItem.text.slice(0, 255)}...`}</p>
        //       </div>
        //       <div className="card-image">
        //         <img src={newsItem.photo} />
        //       </div>
        //     </div>
        //   </div>
        // </div>
      ));
    }

    return (
      <section className="section-home-news">
        <div className="container">
          <h2 className="heading">
            <FormattedMessage id="news.heading" />
          </h2>
          <Slider {...settings} prevArrow={PrevArrow}>
            {/* <div className="row">
              <div className="col s12 m10 offset-m1">
                <div className="card">
                  <div className="card-image">
                    <img src="images/sample-1.jpg" />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
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
  { getNews }
)(HomeNews);
