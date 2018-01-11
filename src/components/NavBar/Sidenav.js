import React, {Component} from 'react';
import Menu from './Menu';
import Panel from './Panel';
//import '../../../css/sidenavs.css'

class Sidenav extends Component {
	render () {
		return (
	      	<div id="mySidenav" className="mySidenav"><Panel /><Menu /></div>
		);
	}
};

export default Sidenav;
