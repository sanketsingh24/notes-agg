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
		let test = false;
		const openDialog=()=> {
						console.log(i+" open");
			    	document.getElementById(i).style.height = "100%";
	  }

		const closeDialog=()=> {
						console.log(i+" close");
						document.getElementById(i).style.height = "0px";
		}
		const Click=()=> {
			if (test) {
				test=false;
				closeDialog();
			} else {
				test=true;
				openDialog();
			}
		}

		return (
				<div key={i} onClick={Click}>
					<div className = "onebit" >
						<img id="image" className = "image" src= {imgw} alt={text} />
						<p id="texts" className = "texts" >{text}</p>
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
