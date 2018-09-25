import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTourCalendar } from '../../actions/tournamentActions';

import { Row, Col, Input, Tab, Collection, CollectionItem, CardPanel } from 'react-materialize';
import MatchesTable from '../common/MatchesTable';

import MainTable from '../common/MainTable';

class TournamentCalendar extends Component {
	state = {
		tour: 0,
		club: 0,
		stadium: 0
	};

	onChangeHandler = (e) => {
		// this.props.history.push("/news");

		// if (e.target.name === "leagues") {
		//   this.props.getCities(e.target.value);
		//   this.props.getNews(`lgId=${e.target.value}`);
		// }
		// if (e.target.name === "city") {
		//   this.props.history.push(`/tournaments/${e.target.value}`);
		// }

		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	};

	componentDidMount = () => {
		this.props.getTourCalendar(this.props.id);
	};

	render() {
		const { calendar } = this.props.tournaments;
		let tableList;

		let toursList;
		let clubsList;
		let stadiumsList;

		if (calendar !== null) {
			toursList = calendar.calendar.filter.tour.map((tourItem) => (
				<option key={tourItem} value={tourItem}>
					{tourItem}
				</option>
			));
			clubsList = calendar.calendar.filter.commands.map((command) => (
				<option key={command.comId} value={command.comId}>
					{command.title}
				</option>
			));
			stadiumsList = calendar.calendar.filter.statiums.map((stadium) => (
				<option key={stadium.id} value={stadium.id}>
					{stadium.title}
				</option>
			));
		}

		return (
			<section className="section-tournament-main">
				<div className="container">
					{/* {tournament ? <h3>{tournament.season.title}</h3> : ''} */}
					<Row>
						<Col s={12} l={8}>
							<div>
								<Row>
									<Input
										s={3}
										type="select"
										name="tour"
										// label="Materialize Select"
										defaultValue={this.state.tour}
										onChange={this.onChangeHandler}
										className="black-text"
									>
										<option value={0} disabled>
											Тур
										</option>
										{toursList ? toursList : <option value={0} disabled />}
									</Input>
									<Input
										s={3}
										type="select"
										name="club"
										// label="Materialize Select"
										defaultValue={this.state.club}
										onChange={this.onChangeHandler}
										className="black-text"
									>
										<option value={0} disabled>
											Команда
										</option>
										{clubsList ? clubsList : <option value={0} disabled />}
									</Input>
									<Input
										s={3}
										type="select"
										name="stadium"
										// label="Materialize Select"
										defaultValue={this.state.stadium}
										onChange={this.onChangeHandler}
										className="black-text"
									>
										<option value={0} disabled>
											Стадион
										</option>
										{stadiumsList ? stadiumsList : <option value={0} disabled />}
									</Input>
								</Row>
							</div>
							<table className="z-depth-2 highlight">{/* <tbody>{tableList}</tbody> */}</table>
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
