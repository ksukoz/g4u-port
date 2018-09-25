import React from 'react';

import { Col, Tabs, Tab, Collection, CollectionItem, CardPanel } from 'react-materialize';

const MatchesTable = (props) => {
	return (
		<Col s={12} l={props.l}>
			<div>
				<div className="tournament-table-head">
					<h3>{props.title}</h3>
				</div>

				<CardPanel className="tournament-game-card">
					{props.games.slice(0, 2).map((game) => (
						<CollectionItem key={game.info.gameId}>
							<div className="tournament-tour-wrap">
								<span className="tournament-tour">{game.info.tour} тур</span>
								{game.info.date ? <span className="tournament-date">{game.info.date}</span> : ''}
							</div>
							<div className="tournament-game-wrap">
								<div className="tournament-game">
									<span className="tournament-game-title">{game.info.in.title}</span>
									<img src={game.info.in.logo} alt="" className="tournament-game-logo" />
								</div>
								<span className="tournament-score">{game.info.score}</span>
								<div className="tournament-game">
									<img src={game.info.out.logo} alt="" className="tournament-game-logo" />
									<span className="tournament-game-title">{game.info.out.title}</span>
								</div>
							</div>
						</CollectionItem>
					))}
				</CardPanel>
			</div>
		</Col>
	);
};

export default MatchesTable;
