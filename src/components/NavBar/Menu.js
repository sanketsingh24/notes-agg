import React, {Component} from 'react';

import names from '../../data/menudesc';

export default class Menu extends Component {
	constructor (props) {
		super(props);
		this.state = { namee: names };
	}

	shook (text,i){
		if (text==='dns') {
			var lol = 'Search by Department';
		}
		else if (text==='code'){
			 lol = 'Search by Subject Code';
		}
		else {
			 lol = 'Search by Semester';
		}
		return (
			<div key={i}>
				<a href="javascript:void(0)">
					<i className="material-icons" >{text}</i>
					<input type="text" name="search" placeholder={lol} className="nav-panel-desc" />
				</a>
			</div>
		);
	}

	render () {
		return( <nav>{this.state.namee.map(this.shook)}</nav>
		);
	}
};
