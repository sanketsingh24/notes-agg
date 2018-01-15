import React, {Component} from 'react';

export default class Semester extends Component {
	constructor (props) {
	    super(props);

		}

	render () {
		return (
			<nav className="Sem-menu">
				<ul>
					{this.props.semNo}
				</ul>
			</nav>);
	}
};
