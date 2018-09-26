import React from 'react';

import { Row, Col, Input, Button, Collection, CollectionItem, CardPanel } from 'react-materialize';

const ResultsTable = (props) => {
	return (
		<Col s={12} l={props.l}>
			<div>
				<Row>
					<Input
						s={3}
						type="select"
						name="tour"
						defaultValue={props.stateTour}
						onChange={props.onChangeHandler}
						className="black-text"
					>
						<option value={0} disabled>
							Тур
						</option>
						{props.tour ? (
							props.tour.map((tourItem) => (
								<option key={tourItem} value={tourItem}>
									{tourItem}
								</option>
							))
						) : (
							<option value={0} disabled />
						)}
					</Input>
					<Input
						s={3}
						type="select"
						name="club"
						defaultValue={props.stateClub}
						onChange={props.onChangeHandler}
						className="black-text"
					>
						<option value={0} disabled>
							Команда
						</option>
						{props.clubs ? (
							props.clubs.map((command) => (
								<option key={command.comId} value={command.comId}>
									{command.title}
								</option>
							))
						) : (
							<option value={0} disabled />
						)}
					</Input>
					<Input
						s={3}
						type="select"
						name="stadium"
						// label="Materialize Select"
						defaultValue={props.stateStadium}
						onChange={props.onChangeHandler}
						className="black-text"
					>
						<option value={0} disabled>
							Стадион
						</option>
						{props.stadiums ? (
							props.stadiums.map((stadium) => (
								<option key={stadium.id} value={stadium.id}>
									{stadium.title}
								</option>
							))
						) : (
							<option value={0} disabled />
						)}
					</Input>
					<Col s={3}>
						<Button waves="green" className="btn--outline" onClick={props.onClearClickHadler}>
							Сбросить
						</Button>
					</Col>
				</Row>
			</div>
			<div className="z-depth-2 calendar-table-wrap">
				{props.gamelist.map((game, i) => (
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
									<td className="right-align">
										<span>{calendarGame.in.title}</span>
										<img src={calendarGame.in.logo} alt="" style={{ height: 25, marginLeft: 8 }} />
									</td>
									<td>{calendarGame.score}</td>
									<td className="left-align">
										<img
											src={calendarGame.out.logo}
											alt=""
											style={{ height: 25, marginRight: 8 }}
										/>
										<span>{calendarGame.out.title}</span>
									</td>
									<td>{calendarGame.stadium}</td>
								</tr>
							))}
						</tbody>
					</table>
				))}
			</div>
		</Col>
	);
};

export default ResultsTable;
