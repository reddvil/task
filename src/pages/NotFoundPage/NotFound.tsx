import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound =  () => {


	return (
		<React.Fragment>
			<div className="not-found">
				<div className="container">
					<h2 className="f-lgv">ოპააა...</h2>
					<p>გვერდი ვერ მოიზებნა</p>
					<Link to={ '/' } className="button">გვერდი ვერ მოიძებნა</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

NotFound.displayName = 'Meama.NotFoundPage';
export default NotFound;
