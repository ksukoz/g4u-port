import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Tabs, Tab, Collection, CollectionItem, CardPanel } from 'react-materialize';
import MatchesTable from '../common/MatchesTable';

class TournamentMain extends Component {
	render() {
		const { tournament } = this.props.tournaments;
		let commandsList;
		let topPlayersList;
		let assistPlayersList;
		let begingamesList;
		let lastgamesList;

		if (tournament) {
			commandsList = tournament.commands.map((command, i) => (
				<tr key={command.command_id}>
					<td>{i + 1}</td>
					<td className="tournament-command-row">
						<img src={command.logo} alt="" style={{ height: 25, marginRight: 8 }} />
						<span>{command.title}</span>
					</td>
					<td>{command.games}</td>
					<td>{command.disgoals}</td>
					<td>{command.pts}</td>
				</tr>
			));

			topPlayersList = tournament.topplayers.top.map((player, i) => (
				<CollectionItem key={i + Date.now()}>
					<div className="tournament-player-wrap">
						<img src={player.player.photo} alt="" className="tournament-player-photo" />
						<div>
							<h5>{player.player.name}</h5>
							<span>{player.command ? player.command.title : ''}</span>
						</div>
					</div>
					<span className="tournament-player-goal">{player.goal}</span>
				</CollectionItem>
			));

			assistPlayersList = tournament.topplayers.assist.map((player, i) => (
				<CollectionItem key={i + Date.now()}>
					<div className="tournament-player-wrap">
						<img src={player.player.photo} alt="" className="tournament-player-photo" />
						<div>
							<h5>{player.player.name}</h5>
							<span>{player.command ? player.command.title : ''}</span>
						</div>
					</div>
					<span className="tournament-player-goal">{player.goal}</span>
				</CollectionItem>
			));
		}

		return (
			<section className="section-tournament-main">
				<div className="container">
					{tournament ? <h3>{tournament.season.title}</h3> : ''}
					<Row>
						<Col s={12} l={6}>
							<table className="z-depth-2 highlight">
								<thead>
									<tr className="tournament-table-head">
										<th colSpan={5}>Таблица</th>
									</tr>
									<tr>
										<th>Позиция</th>
										<th>Клуб</th>
										<th>И</th>
										<th>РГ</th>
										<th>О</th>
									</tr>
								</thead>
								<tbody>{commandsList}</tbody>
							</table>
						</Col>
						<Col s={12} l={6}>
							<div>
								<div className="tournament-table-head">
									<h3>Топ</h3>
								</div>
								<CardPanel>
									<Tabs
										className="tournament-table-tabs"
										defaultValue="tab_120"
										key={'tabs' + Date.now()}
									>
										<Tab title="Бомбардиры" active>
											<Collection>{topPlayersList}</Collection>
										</Tab>
										<Tab title="Ассистенты">
											<Collection>{assistPlayersList}</Collection>
										</Tab>
									</Tabs>
								</CardPanel>
							</div>
						</Col>
					</Row>
					<Row>
						<MatchesTable
							l={6}
							title="Ближайшие матчи"
							games={
								this.props.tournaments && this.props.tournaments.tournament ? (
									this.props.tournaments.tournament.begingames
								) : (
									[]
								)
							}
						/>
						<MatchesTable
							l={6}
							title="Последние матчи"
							games={
								this.props.tournaments && this.props.tournaments.tournament ? (
									this.props.tournaments.tournament.lastgames
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

export default connect(mapStateToProps, null)(TournamentMain);
