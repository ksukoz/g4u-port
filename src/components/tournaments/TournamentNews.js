import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTourNews } from '../../actions/tournamentActions';

import { Row, Col, Input, Button, Collection, CollectionItem, CardPanel } from 'react-materialize';
import MatchesTable from '../common/MatchesTable';
import NewsItem from '../common/NewsItem';
import MainTable from '../common/MainTable';

class TournamentNews extends Component {
	componentDidMount = () => {
		this.props.getTourNews(this.props.id);
	};

	render() {
		const { news } = this.props.tournaments;

		let newsList;

		if (news !== null) {
			newsList = news.news.map((newsItem) => (
				<NewsItem
					key={newsItem.news_id}
					l={12}
					title={newsItem.title}
					date={newsItem.date}
					text={newsItem.text}
					news_id={newsItem.news_id}
					photo={newsItem.photo}
				/>
			));
		}

		return (
			<section className="section-tournament-main">
				<div className="container">
					<Row>
						<Col s={12} l={8}>
							<Row>{newsList}</Row>
						</Col>

						<Col s={12} l={4}>
							<MainTable
								l={12}
								title="Таблица"
								commands={
									this.props.tournaments && this.props.tournaments.news ? (
										this.props.tournaments.news.table
									) : (
										[]
									)
								}
							/>
							<MatchesTable
								l={12}
								title="Последние матчи"
								games={
									this.props.tournaments && this.props.tournaments.news ? (
										this.props.tournaments.news.lastgames
									) : (
										[]
									)
								}
							/>
							<MatchesTable
								l={12}
								title="Ближайшие матчи"
								games={
									this.props.tournaments && this.props.tournaments.news ? (
										this.props.tournaments.news.begingames
									) : (
										[]
									)
								}
							/>
						</Col>
					</Row>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tournaments: state.tournaments
});

export default connect(mapStateToProps, { getTourNews })(TournamentNews);
