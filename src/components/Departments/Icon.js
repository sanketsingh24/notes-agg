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
					{this.props.dept.map((dept,i) =>
							<Onebit id={i} key={i} imge={dept.imge} dept_name={dept.dept_name} />
					)}
				</div>
			</div>
		);
	}
}
