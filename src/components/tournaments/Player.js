import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { getTourPlayer } from '../../actions/tournamentActions';
import { Row, Col, Tabs, Tab, Dropdown, NavItem, Navbar, Button, Input } from 'react-materialize';
import playerBg from './img/player-bg.png';

class Player extends Component {
	componentDidMount = () => {
		this.props.getTourPlayer(this.props.match.params.id);
	};

	render() {
		const { player } = this.props.tournaments;
		return (
			<section className="section-player">
				<div
					className="promo"
					style={{
						// tournaments && tournaments.photo
						//   ? `url(${tournaments.photo}) 0% 0% / cover  no-repeat`
						//   :
						background: `url(${playerBg}) 50% 50% / cover  no-repeat`
						// backgroundSize: "cover"
					}}
				>
					<div className="player-info">
						<div className="container">
							<Row>
								<Col m={10}>
									<img src={player ? player.header.photo : ''} className="z-depth-1" alt="" />
									<h1>
										{player ? (
											`${player.header.name} ${player.header.patronymic} ${player.header
												.surename}`
										) : (
											''
										)}
									</h1>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tournaments: state.tournaments,
	leagues: state.leagues
});

export default connect(mapStateToProps, { getTourPlayer })(Player);
