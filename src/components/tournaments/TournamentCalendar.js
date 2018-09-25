import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTourCalendar } from '../../actions/tournamentActions';

import { Row, Col, Tabs, Tab, Collection, CollectionItem, CardPanel } from 'react-materialize';
import MatchesTable from '../common/MatchesTable';

import MainTable from '../common/MainTable';

class TournamentCalendar extends Component {
	componentDidMount = () => {
		this.props.getTourCalendar(this.props.id);
	};

	render() {
		const { calendar } = this.props.tournaments;
		let tableList;

		return (
			<section className="section-tournament-main">
				<div className="container">
					{/* {tournament ? <h3>{tournament.season.title}</h3> : ''} */}
					<Row>
						<Col s={12} l={8}>
							<table className="z-depth-2 highlight">
								<thead>
									<tr className="tournament-table-head">
										<th colSpan={12}>Таблица</th>
									</tr>
									<tr>
										<th>Поз</th>
										<th>Клуб</th>
										<th>И</th>
										<th>В</th>
										<th>Н</th>
										<th>П</th>
										<th>ЗГ</th>
										<th>ПГ</th>
										<th>РГ</th>
										<th>О</th>
										<th>ОзМ</th>
										<th>Форма</th>
									</tr>
								</thead>
								{/* <tbody>{tableList}</tbody> */}
							</table>
						</Col>
						<MainTable
							l={4}
							title="Таблица"
							commands={
								this.props.tournaments && this.props.tournaments.calendar ? (
									this.props.tournaments.calendar.table
								) : (
									[]
								)
							}
						/>
						<MatchesTable
							l={4}
							title="Последние матчи"
							games={
								this.props.tournaments && this.props.tournaments.calendar ? (
									this.props.tournaments.calendar.lastgames
								) : (
									[]
								)
							}
						/>
						<MatchesTable
							l={4}
							title="Ближайшие матчи"
							games={
								this.props.tournaments && this.props.tournaments.calendar ? (
									this.props.tournaments.calendar.begingames
								) : (
									[]
								)
							}
						/>
					</Row>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tournaments: state.tournaments,
	leagues: state.leagues
});

export default connect(mapStateToProps, { getTourCalendar })(TournamentCalendar);
