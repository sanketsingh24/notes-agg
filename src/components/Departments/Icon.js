import React, { Component } from 'react';
import Onebit from './Onebit';
import Header from '../Header/Header';

//import '../../../css/icons.css';

//import images


export default class Icon extends Component {
	constructor (props) {
	    super(props);
	    this.state = {
				pageHeader: 'Departments'
			 };
		}

	render () {
		return (
			<div>
				<Header message={this.state.pageHeader} />
				<div className="pro" >
					{Object.keys(this.props.alldata.courses).map(deptid =>
							<Onebit id={deptid} onlick={this.props.onDeptSelect} key={deptid} {...this.props.alldata.courses[deptid]} />
					)}
				</div>
			</div>
		);
	}
};
