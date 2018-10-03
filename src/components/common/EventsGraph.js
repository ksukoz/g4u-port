import React from "react";

const EventsGraph = props => {
  const arr = [];
  for (let i = 10; i < props.end - (props.end % 10) - 10; i = i + 10) {
    arr.push(i);
  }

  return (
    <div className="events-graph">
      <div className="events-graph-bg">
        <div className="events-periods">
          <span>0</span>
          {arr.map(item => (
            <span>{item}</span>
          ))}
          <span>{props.end}</span>
        </div>
      </div>
    </div>
  );
};

export default EventsGraph;
