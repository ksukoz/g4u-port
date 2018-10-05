import React from 'react';

const EventsGraph = (props) => {
	const arr = [];
	for (let i = 10; i < props.end - props.end % 10 - 10; i = i + 10) {
		arr.push(i);
	}

	return (
		<div className="events-graph">
			<div className="events-graph-bg">
				<div className="events-periods">
					<span>0</span>
					{arr.map((item) => <span>{item}</span>)}
					<span>{props.end}</span>
				</div>
				<div className="events-wrap">
					{props.events.map((event) => (
						<div
							className={`events-item ${event.evType === 'up' ? 'up' : 'down'}`}
							style={{ left: `calc(${+event.minute / props.end * 100}% - 15px)` }}
						>
							<img src={event.icon} alt="" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventsGraph;
