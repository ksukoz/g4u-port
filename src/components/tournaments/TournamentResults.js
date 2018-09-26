import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTourResults, getFilteredResults } from '../../actions/tournamentActions';

import { Row, Col, Input, Button, Collection, CollectionItem, CardPanel } from 'react-materialize';
import ResultsTable from '../common/ResultsTable';

class TournamentResults extends Component {
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
		this.props.getFilteredResults(
			this.props.id,
			this.state.tour !== 0 ? `tour=${this.state.tour}` : '',
			this.state.club !== 0 ? `comId=${this.state.club}` : '',
			this.state.stadium !== 0 ? `stadId=${this.state.stadium}` : ''
		);
	};

	onClearClickHadler = () => {
		this.props.getTourResults(this.props.id);

		this.setState({
			tour: 0,
			club: 0,
			stadium: 0
		});
	};

	componentDidMount = () => {
		this.props.getTourResults(this.props.id);
	};

	render() {
		const { results } = this.props.tournaments;

		return (
			<section className="section-tournament-main">
				<div className="container">
					<Row>
						<ResultsTable
							l={12}
							stateTour={this.state.tour}
							onChangeHandler={this.onChangeHandler}
							stateClub={this.state.club}
							stateStadium={this.state.stadium}
							tour={results !== null ? results.result.filter.tour : []}
							clubs={results !== null ? results.result.filter.commands : []}
							stadiums={results !== null ? results.result.filter.statiums : []}
							onClearClickHadler={this.onClearClickHadler}
							gamelist={results !== null ? results.result.gamelist : []}
						/>
					</Row>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	tournaments: state.tournaments
});

export default connect(mapStateToProps, { getTourResults, getFilteredResults })(TournamentResults);
