import React from 'react';

import { Col, Tabs, Tab, Collection, CollectionItem, CardPanel } from 'react-materialize';

const MainTable = (props) => {
	return (
		<Col s={12} l={props.l}>
			<div>
				<div className="tournament-table-head">
					<h3>{props.title}</h3>
				</div>
				<table className="z-depth-2 highlight">
					<thead>
						<tr>
							<th>Позиция</th>
							<th>Клуб</th>
							<th>И</th>
							<th>РГ</th>
							<th>О</th>
						</tr>
					</thead>
					<tbody>
						{props.commands.map((command, i) => (
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
						))}
					</tbody>
				</table>
			</div>
		</Col>
	);
};

export default MainTable;
