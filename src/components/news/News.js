import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Card } from 'react-materialize';
import news_bg from './img/news_bg.png';

import NewsItem from '../common/NewsItem';

import { getNews, getMainNews } from '../../actions/newsActions';

class News extends Component {
	componentWillMount() {
		this.props.getMainNews();
	}

	render() {
		const { news, mainNews } = this.props.news;
		const { tournaments } = this.props.leagues;
		let newsList;

		if (news !== null) {
			newsList = news.map((newsItem) => (
				<NewsItem
					key={newsItem.news_id}
					l={12}
					title={newsItem.title}
					date={newsItem.date}
					text={newsItem.text}
					news_id={newsItem.news_id}
					photo={newsItem.photo}
				/>
				// <Col s={12} className="news-item" key={newsItem.news_id}>
				//   <Card>
				//     <div className="news-content">
				//       <h2 className="news-title">
				//         <span>{newsItem.title}</span>
				//         <small>{newsItem.date}</small>
				//       </h2>
				//       <p
				//         dangerouslySetInnerHTML={{
				//           __html:
				//             newsItem.text.length > 255
				//               ? `${newsItem.text.slice(0, 255)}...`
				//               : newsItem.text
				//         }}
				//         className="news-text"
				//       />
				//       {newsItem.text.length > 255 ? (
				//         <Link
				//           className="news-card-link"
				//           to={`/news/${newsItem.news_id}`}
				//         >
				//           <FormattedMessage id="news.link" />
				//         </Link>
				//       ) : (
				//         ""
				//       )}
				//     </div>
				//     <img className="responsive-img" src={newsItem.photo} alt="" />
				//   </Card>
				// </Col>
			));
		} else if (news === null && mainNews !== null) {
			newsList = mainNews.map((newsItem) => (
				<NewsItem
					key={newsItem.news_id}
					l={12}
					title={newsItem.title}
					date={newsItem.date}
					text={newsItem.text}
					news_id={newsItem.news_id}
					photo={newsItem.photo}
				/>
				// <Col s={12} className="news-item" key={newsItem.news_id}>
				//   <Card>
				//     <div className="news-content">
				//       <h2 className="news-title">
				//         <span>{newsItem.title}</span>
				//         <small>{newsItem.date}</small>
				//       </h2>
				//       <p
				//         dangerouslySetInnerHTML={{
				//           __html:
				//             newsItem.text.length > 255
				//               ? `${newsItem.text.slice(0, 255)}...`
				//               : newsItem.text
				//         }}
				//         className="news-text"
				//       />
				//       {newsItem.text.length > 255 ? (
				//         <Link
				//           className="news-card-link"
				//           to={`/news/${newsItem.news_id}`}
				//         >
				//           <FormattedMessage id="news.link" />
				//         </Link>
				//       ) : (
				//         ""
				//       )}
				//     </div>
				//     <img className="responsive-img" src={newsItem.photo} alt="" />
				//   </Card>
				// </Col>
			));
		}

		return (
			<section className="section-news">
				<div
					className="section-promo"
					style={{
						// tournaments && tournaments.photo
						//   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
						//   :
						background: `url(${news_bg}) 0% 0% / cover  no-repeat`
						// backgroundSize: "cover"
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col m9">
								<h1>
									{tournaments && tournaments.name ? (
										tournaments.name
									) : (
										<FormattedMessage id="promo.heading" />
									)}
								</h1>
								<p>
									{tournaments && tournaments.description ? (
										tournaments.description
									) : (
										<FormattedMessage id="promo.text" />
									)}
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <img className="responsive-img" src={news_bg} alt="" /> */}
				<div className="container">
					<Row>{newsList}</Row>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	news: state.news,
	leagues: state.leagues
});

export default connect(mapStateToProps, { getMainNews })(News);
