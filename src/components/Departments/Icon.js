import React, { Component } from 'react';
import Onebit from './Onebit';
import Header from '../Header/Header';

//import '../../../css/icons.css';

//import images


export default class Icon extends Component {
	constructor (props) {
	    super(props);
	    this.state = {
				data : this.props.alldata ,
				pageHeader: 'Departments'
			 };
		}

	componentWillReceiveProps(nextprops) {
			this.setState({
				data : nextprops.alldata
			})
	}

	render () {
		return (
			<div>
				<Header message={this.state.pageHeader} />
				<div className="pro" >
					{this.state.data.map(data =>
							<Onebit id={data.dept_id} key={data.id} image={data.imge} description={data.dept_name} />
					)}
				</div>
			</div>
		);
	}
};
