import React from 'react';

import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Card } from 'react-materialize';

const NewsItem = (props) => {
	return (
		<Col s={12} className="news-item" l={props.l}>
			<Card>
				<div className="news-content">
					<h2 className="news-title">
						<span>{props.title}</span>
						<small>{props.date}</small>
					</h2>
					<p
						dangerouslySetInnerHTML={{
							__html: props.text.length > 255 ? `${props.text.slice(0, 255)}...` : props.text
						}}
						className="news-text"
					/>
					{props.text.length > 255 ? (
						<Link className="news-card-link" to={`/news/${props.news_id}`}>
							<FormattedMessage id="news.link" />
						</Link>
					) : (
						''
					)}
				</div>
				<img className="responsive-img" src={props.photo} alt="" />
			</Card>
		</Col>
	);
};

export default NewsItem;
