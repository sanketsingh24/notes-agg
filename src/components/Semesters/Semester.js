import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Semester extends Component {
	constructor (props) {
	    super(props);

		}

	render () {
		return (
			<nav className="Sem-menu">
				<ul>
					{this.props.semList.courses[0].total_sems.map(data =>
						<li key={data}>{data}</li>
					)}
				</ul>
			</nav>);
	}
};
