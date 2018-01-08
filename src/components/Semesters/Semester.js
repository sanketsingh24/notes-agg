import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Semester extends Component {
	constructor (props) {
	    super(props);
	    this.state = { sem : [] };
		}

	render () {
		return (
			<nav className="Sem-menu">
			{this.props.sem.map(sems => {
				return <Link key={} to={} >
					{}
				</Link>;
			})}
		</nav>);
	}
};
