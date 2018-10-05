import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTourStats, getFilteredStats } from '../../actions/tournamentActions';

import { Row, Col, Input, Button, Collection, CollectionItem, CardPanel } from 'react-materialize';

class TournamentStats extends Component {
	state = {
		name: '',
		club: 0,
		position: 0,
		limit: 20,
		up: 1,
		order: 'name',
		offset: 1
	};

	onChangeHandler = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
		if (e.target.name === 'name' && e.target.value.length >= 3) {
			this.props.getFilteredStats(
				this.props.id,
				`name=${e.target.value}`,
				this.state.club !== 0 ? `comId=${this.state.club}` : '',
				this.state.position !== 0 ? `posId=${this.state.position}` : '',
				`limit=${this.state.limit}`,
				`offset=${this.state.offset}`,
				`order=${this.state.order}`,
				`up=${this.state.up}`
			);
		} else {
			this.props.getFilteredStats(
				this.props.id,
				this.state.name.length >= 3 ? `name=${this.state.name}` : '',
				this.state.club !== 0 ? `comId=${this.state.club}` : '',
				this.state.position !== 0 ? `posId=${this.state.position}` : '',
				`limit=${this.state.limit}`,
				`offset=${this.state.offset}`,
				`order=${this.state.order}`,
				`up=${this.state.up}`
			);
		}
	};

	onClearClickHadler = () => {
		this.props.getTourStats(this.props.id);

		this.setState({
			name: '',
			club: 0,
			position: 0,
			limit: 20
		});
	};

	onArrowClickHandler = (e) => {
		this.setState({
			...this.state,
			up: this.state.up === 0 ? 1 : 0
		});

		this.props.getFilteredStats(
			this.props.id,
			this.state.name.length >= 3 ? `name=${this.state.name}` : '',
			this.state.club !== 0 ? `comId=${this.state.club}` : '',
			this.state.position !== 0 ? `posId=${this.state.position}` : '',
			`limit=${this.state.limit}`,
			`offse=${this.state.offset}`,
			`order=${this.state.order}`,
			`up=${this.state.up}`
		);
	};

	onOrderClickHandler = (orderName) => {
		this.setState({
			...this.state,
			order: orderName,
			up: this.state.up === 1 ? 0 : 1
		});
		this.props.getFilteredStats(
			this.props.id,
			this.state.name.length >= 3 ? `name=${this.state.name}` : '',
			this.state.club !== 0 ? `comId=${this.state.club}` : '',
			this.state.position !== 0 ? `posId=${this.state.position}` : '',
			`limit=${this.state.limit}`,
			`offset=${this.state.offset}`,
			`order=${orderName}`,
			`up=${this.state.up}`
		);
	};

	componentDidMount = () => {
		this.props.getTourStats(this.props.id);
	};

	render() {
		const { stats } = this.props.tournaments;

		let statsList;
		let clubsList;
		let positionsList;
		let limitList;
		let pagesList;

		if (stats !== null) {
			// console.log(stats.table);
			statsList = stats.table.map((person, i) => (
				<tr key={person.plId} onClick={this.props.onClickHandler(person.plId)} style={{ cursor: 'pointer' }}>
					<td>{i + 1 + +this.state.limit * (+this.state.offset - 1)}</td>
					<td>{person.name}</td>
					<td className="tournament-command-row">
						<img src={person.comLogo} alt="" style={{ height: 25, marginRight: 8 }} />
						<span>{person.comTitle}</span>
					</td>
					<td>{person.type}</td>
					<td>{person.games}</td>
					<td>{person.goal}</td>
					<td>{person.penalty}</td>
					<td>{person.assist}</td>
					<td>{person.yellow}</td>
					<td>{person.red}</td>
					<td>{parseFloat(person.points).toFixed(1)}</td>
					<td />
				</tr>
			));

			clubsList = stats.filter.commands.map((command) => (
				<option key={command.comId} value={command.comId}>
					{command.title}
				</option>
			));

			positionsList = stats.filter.pos.map((position) => (
				<option key={position.posId} value={position.posId}>
					{position.type}
				</option>
			));

			limitList = stats.filter.limit.map((item) => (
				<option key={item} value={item}>
					{item}
				</option>
			));

			pagesList = (
				<Col s={2}>
					<div className="stats-pagination">
						<Button
							floating
							large
							className="stats-pagination-btn"
							waves="light"
							icon="keyboard_arrow_left"
							onClick={() =>
								stats.filter.offset.prev
									? this.setState(
											{ ...this.state, offset: stats.filter.offset.prev },
											this.props.getFilteredStats(
												this.props.id,
												this.state.name.length >= 3 ? `name=${this.state.name}` : '',
												this.state.club !== 0 ? `comId=${this.state.club}` : '',
												this.state.position !== 0 ? `posId=${this.state.position}` : '',
												`limit=${this.state.limit}`,
												`offset=${stats.filter.offset.prev}`,
												`order=${this.state.order}`,
												`up=${this.state.up}`
											)
										)
									: ''}
							disabled={!stats.filter.offset.prev}
						/>
						<span>{stats.filter.offset.curr}</span>
						<Button
							floating
							large
							className="stats-pagination-btn"
							waves="light"
							icon="keyboard_arrow_right"
							onClick={() =>
								stats.filter.offset.next
									? this.setState(
											{ ...this.state, offset: stats.filter.offset.next },
											this.props.getFilteredStats(
												this.props.id,
												this.state.name.length >= 3 ? `name=${this.state.name}` : '',
												this.state.club !== 0 ? `comId=${this.state.club}` : '',
												this.state.position !== 0 ? `posId=${this.state.position}` : '',
												`limit=${this.state.limit}`,
												`offset=${stats.filter.offset.next}`,
												`order=${this.state.order}`,
												`up=${this.state.up}`
											)
										)
									: ''}
							disabled={!stats.filter.offset.next}
						/>
					</div>
				</Col>
			);
		}

		return (
			<section className="section-tournament-main">
				<div className="container">
					{/* {tournament ? <h3>{tournament.season.title}</h3> : ''} */}
					<Row>
						<Input
							s={2}
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.onChangeHandler}
							className="black-text"
							placeholder="Имя игрока"
						/>
						<Input
							s={2}
							type="select"
							name="club"
							value={this.state.club}
							onChange={this.onChangeHandler}
							className="black-text"
						>
							<option value={0} disabled>
								Команда
							</option>
							{clubsList ? (
								clubsList
							) : (
								<option value={0} disabled>
									Команда
								</option>
							)}
						</Input>
						<Input
							s={2}
							type="select"
							name="position"
							// label="Materialize Select"
							value={this.state.position}
							onChange={this.onChangeHandler}
							className="black-text"
						>
							<option value={0} disabled>
								Позиция
							</option>
							{positionsList ? (
								positionsList
							) : (
								<option value={0} disabled>
									Позиция
								</option>
							)}
						</Input>
						<Input
							s={2}
							type="select"
							name="limit"
							value={this.state.limit}
							onChange={this.onChangeHandler}
							className="black-text"
						>
							<option value={0} disabled>
								Выводить по
							</option>
							{limitList ? (
								limitList
							) : (
								<option value={0} disabled>
									Выводить по
								</option>
							)}
						</Input>
						{pagesList}
						<Col s={2}>
							<Button waves="green" className="btn--outline" onClick={this.onClearClickHadler}>
								Сбросить
							</Button>
						</Col>
					</Row>
					<Row>
						<Col s={12} l={12}>
							<table className="z-depth-2 highlight">
								<thead>
									<tr>
										<th>Поз</th>
										<th
											onClick={() => this.onOrderClickHandler('name')}
											style={{ cursor: 'pointer' }}
										>
											Имя
										</th>
										<th
											onClick={() => this.onOrderClickHandler('comTitle')}
											style={{ cursor: 'pointer' }}
										>
											Клуб
										</th>
										<th
											onClick={() => this.onOrderClickHandler('type')}
											style={{ cursor: 'pointer' }}
										>
											Позиция
										</th>
										<th
											onClick={() => this.onOrderClickHandler('games')}
											style={{ cursor: 'pointer' }}
										>
											И
										</th>
										<th
											onClick={() => this.onOrderClickHandler('goal')}
											style={{ cursor: 'pointer' }}
										>
											Г
										</th>
										<th
											onClick={() => this.onOrderClickHandler('penalty')}
											style={{ cursor: 'pointer' }}
										>
											П
										</th>
										<th
											onClick={() => this.onOrderClickHandler('assist')}
											style={{ cursor: 'pointer' }}
										>
											ПГ
										</th>
										<th
											onClick={() => this.onOrderClickHandler('yellow')}
											style={{ cursor: 'pointer' }}
										>
											ЖК
										</th>
										<th
											onClick={() => this.onOrderClickHandler('red')}
											style={{ cursor: 'pointer' }}
										>
											КК
										</th>
										<th
											onClick={() => this.onOrderClickHandler('points')}
											style={{ cursor: 'pointer' }}
										>
											О
										</th>
										<th>
											<span
												onClick={this.onArrowClickHandler}
												style={{ cursor: 'pointer', fontSize: '2rem' }}
											>
												{this.state.up ? '\u2191' : '\u2193'}
											</span>
										</th>
									</tr>
								</thead>
								<tbody>{statsList}</tbody>
							</table>
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

export default connect(mapStateToProps, { getTourStats, getFilteredStats })(TournamentStats);
