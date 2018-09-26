import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTourClubs } from '../../actions/tournamentActions';

import { Link } from 'react-router-dom';

import { Row, Col, Input, Button, Collection, CollectionItem, CardPanel } from 'react-materialize';
import MatchesTable from '../common/MatchesTable';

import MainTable from '../common/MainTable';

class TournamentClubs extends Component {
	componentDidMount = () => {
		this.props.getTourClubs(this.props.id);
	};

	render() {
		const { clubs } = this.props.tournaments;

		let clubsList;

		if (clubs !== null) {
			clubsList = clubs.clubs.map((club) => (
				<Col s={12} m={6} key={club.comId}>
					<div className="z-depth-2 commands-card">
						<img src={club.logo} alt="" />
						<h4>{club.title}</h4>
						<Link to={`/`} className="btn btn--outline btn--gray">
							Подробнее
						</Link>
					</div>
				</Col>
			));
		}

		return (
			<section className="section-tournament-main">
				<div className="container">
					<Row>
						<Col s={12} l={8}>
							<Row>{clubsList}</Row>
						</Col>

						<Col s={12} l={4}>
							<MainTable
								l={12}
								title="Таблица"
								commands={
									this.props.tournaments && this.props.tournaments.clubs ? (
										this.props.tournaments.clubs.table
									) : (
										[]
									)
								}
							/>
							<MatchesTable
								l={12}
								title="Последние матчи"
								games={
									this.props.tournaments && this.props.tournaments.clubs ? (
										this.props.tournaments.clubs.lastgames
									) : (
										[]
									)
								}
							/>
							<MatchesTable
								l={12}
								title="Ближайшие матчи"
								games={
									this.props.tournaments && this.props.tournaments.clubs ? (
										this.props.tournaments.clubs.begingames
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

export default connect(mapStateToProps, { getTourClubs })(TournamentClubs);
