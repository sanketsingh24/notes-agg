import React, {Component} from 'react';
import Dialog from './Dialogbox';
import '../../../css/icons.css';

//import images
import depart from '../../data/departments';


export default class Icon extends Component {
	constructor (props) {
	    super(props);
	    this.state = { img : depart };
      this.look=this.look.bind(this);
		}

	look (imgdes, i) {
		let text = imgdes.dept_name;
		let imgw = imgdes.imge;
		let sems = imgdes.sem_no;
		const openDialog=()=> {
			    	document.getElementById(i).style.display = "block";
	  }

		return (
				<div key={i} onClick={openDialog}>
					<div className = "onebit" >
						<img className = "image" src= {imgw} alt={text} />
						<p className = "texts" >{text}</p>
					</div>
					<Dialog number={sems} index={i} />
				</div>
			);
		}


	render () {
		return (
			<div>
				<h1>Departments</h1>
				<div className="pro" >
					{this.state.img.map(this.look)}
				</div>
			</div>
		);
	}
};
