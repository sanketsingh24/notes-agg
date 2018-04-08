import React, { Component } from 'react';
import Menu from './Menu';
import Panel from './Panel';
//import '../../../css/sidenavs.css'

class Sidenav extends Component {
	constructor(props) {
		super(props);
	
		this.openNav = this.openNav.bind(this);
		this.closeNav = this.closeNav.bind(this);
		this.onClick= this.onClick.bind(this);
		this.state = {open: false};
		}
	
	
		openNav() {
			document.getElementById("mySidenav").style.width = "425px";
			document.getElementById("container").style.marginLeft = "400px";
			//document.getElementById( "panelinout" ).setAttribute( "onClick", {closeNav} );
				this.setState({open: true});
				document.getElementById("panelinout").className = "hamburger change";
		}
	
		closeNav() {
			document.getElementById("mySidenav").style.width = "50px";
			document.getElementById("container").style.marginLeft = "24px";
			//document.getElementById("panelinout" ).setAttribute( "onClick", {openNav} );
			this.setState({open: false});
			document.getElementById("panelinout").className = "hamburger";
		}
	
		onClick() {
			if (this.state.open) {
				this.closeNav();
			} else {
				this.openNav();
			}
		}

	render () {
		return (
	      	<div id="mySidenav" className="mySidenav" onClick= {this.onClick} ><Panel /><Menu /></div>
		);
	}
};

export default Sidenav;
