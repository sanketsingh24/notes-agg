import React, { Component } from 'react';
import Onebit from './Onebit';
import Header from '../Header/Header';
import PropTypes from 'prop-types';

//import '../../../css/icons.css';

//import images


export default class Icon extends Component {

	render () {
		return (
			<div>
				<Header message='Departments' />
				<div className="pro" >
					{Object.keys(this.props.dept).map(deptid =>
							<Onebit id={deptid} key={deptid} dept={this.props.dept[deptid]} />
					)}
				</div>
			</div>
		);
	}
}

