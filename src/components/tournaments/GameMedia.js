import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { getTourGameMedia } from '../../actions/tournamentActions';
import { Row, Col, Tabs, Tab, Dropdown, NavItem, Navbar, Button, Input, Collection } from 'react-materialize';
import CollectionItem from 'react-materialize/lib/CollectionItem';
import EventsGraph from '../common/EventsGraph';

class GameMedia extends Component {
	componentDidMount = () => {
		this.props.getTourGameMedia(this.props.id);
	};

	render() {
		return (
			<div className="game-composition">
				<Row>
					<Col s={12}>
						<EventsGraph
							end={this.props.tournaments.composition ? this.props.tournaments.composition.maxmin : 60}
							events={this.props.tournaments.composition ? this.props.tournaments.composition.events : []}
						/>
					</Col>
				</Row>
				{/* <Row>
            <Col m={4}>
                {composition ?(
                    // console.log(composition.in)
                    <Collection className="z-depth-1">
                        {composition.in.map((item) => (
                            // <ListItem img={item.photo} key={item.plId} />
                            <CollectionItem key={item.plid}>
                                <img src={item.photo} alt="" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.type}</p>
                                </div>
                            </CollectionItem>
                        ))}
                    </Collection>
                ) : (
                    ''
                )}
            </Col> */}
				{/* <Col m={4}>
                {composition ? <img className="game-composition-field" src={composition.field} alt="" /> : ''}
            </Col>
            <Col m={4}>
                {composition ? (
                    // console.log(composition.in)
                    <Collection>
                        {composition.out.map((item) => (
                            // <ListItem img={item.photo} key={item.plId} />
                            <CollectionItem key={item.plid}>
                                <img src={item.photo} alt="" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.type}</p>
                                </div>
                            </CollectionItem>
                        ))}
                    </Collection>
                ) : (
                    ''
                )}
            </Col> */}
				{/* </Row> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	tournaments: state.tournaments
});

export default connect(
	mapStateToProps,
	// null,
	{ getTourGameMedia }
)(GameMedia);
