import React, { Component, PropTypes } from 'react';
import Onebit from './Onebit';
import Header from '../Header/Header';

//import '../../../css/icons.css';

//import images


export default class Icon extends Component {

	render () {
		return (
			<div>
				<Header message='Departments' />
				<div className="pro" >
					{Object.keys(this.props.dept).map(deptid =>
							<Onebit id={deptid} key={deptid} {...this.props.dept[deptid]} />
					)}
				</div>
			</div>
		);
	}
}

Icon.propTypes = {
  dept: PropTypes.Object.isRequired
};
