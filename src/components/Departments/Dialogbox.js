import React, {Component} from 'react';
import './dialogbo.css';

import { Link } from 'react-router-dom';


export default class Dialogbox extends Component {
  constructor (props) {
	    super(props);
	    this.closeDialog = this.closeDialog.bind(this);
		}
  look (numb, i) {
    let ll = numb;
    return(
      <p key={i}>{ll}</p>
    );
  }
  closeDialog() {
          const ind = this.props.index;
          console.log(ind);
          document.getElementById(ind).style.display = "none";
    }

  render() {
    return (
      <div id={this.props.index} className="modal">
        <div className="modal-content">
          <div className="modal-header">
						<span className="close" onClick={this.closeDialog}>&times;</span>
            <h2>Semester</h2>
          </div>
          <div className="modal-body">
            <Link to="/courses">{this.props.number.map(this.look)}</Link>
          </div>
        </div>
      </div>
    );
  }
}
