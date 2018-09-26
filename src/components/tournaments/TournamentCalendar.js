import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTourCalendar, getFilteredCalendar } from '../../actions/tournamentActions';

import { Row, Col, Input, Button, Collection, CollectionItem, CardPanel } from 'react-materialize';
import MatchesTable from '../common/MatchesTable';

import MainTable from '../common/MainTable';

class TournamentCalendar extends Component {
	state = {
		tour: 0,
		club: 0,
		stadium: 0
	};

	onChangeHandler = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
		this.props.getFilteredCalendar(
			this.props.id,
			this.state.tour !== 0 ? `tour=${this.state.tour}` : '',
			this.state.club !== 0 ? `comId=${this.state.club}` : '',
			this.state.stadium !== 0 ? `stadId=${this.state.stadium}` : ''
		);
	};

	onClearClickHadler = () => {
		this.props.getTourCalendar(this.props.id);

		this.setState({
			tour: 0,
			club: 0,
			stadium: 0
		});
	};

	componentDidMount = () => {
		this.props.getTourCalendar(this.props.id);
	};

	render() {
		const { calendar } = this.props.tournaments;
		let calendarList;

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
			calendarList = calendar.calendar.gamelist.map((game, i) => (
				<table className="highlight calendar-table" key={game.date + i}>
					<thead>
						<tr>
							<th colSpan={12}>{game.date}</th>
						</tr>
					</thead>
					<tbody>
						{game.games.map((calendarGame) => (
							<tr key={calendarGame.game_id}>
								<td>{calendarGame.date}</td>
								<td>
									<span>{calendarGame.in.title}</span>
									<img src={calendarGame.in.logo} alt="" style={{ height: 25, marginLeft: 8 }} />
								</td>
								<td>{calendarGame.score}</td>
								<td>
									<img src={calendarGame.out.logo} alt="" style={{ height: 25, marginRight: 8 }} />
									<span>{calendarGame.out.title}</span>
								</td>
								<td>{calendarGame.stadium}</td>
							</tr>
						))}
					</tbody>
				</table>
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
									<Col s={3}>
										<Button waves="dark" className="btn--outline" onClick={this.onClearClickHadler}>
											Сбросить
										</Button>
									</Col>
								</Row>
							</div>
							<div className="z-depth-2 calendar-table-wrap">{calendarList}</div>
						</Col>
						<Col s={12} l={4}>
							<MainTable
								l={12}
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
								l={12}
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
								l={12}
								title="Ближайшие матчи"
								games={
									this.props.tournaments && this.props.tournaments.calendar ? (
										this.props.tournaments.calendar.begingames
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
	tournaments: state.tournaments,
	leagues: state.leagues
});

export default connect(mapStateToProps, { getTourCalendar, getFilteredCalendar })(TournamentCalendar);
