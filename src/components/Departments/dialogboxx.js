import React, {Component} from 'react';
import './dialogbo.css';

import { Link } from 'react-router-dom';


export default class Dialogboxx extends Component {
  constructor (props) {
	    super(props);
		}
  look (numb, i) {
    let ll = numb;
    return(
      <p key={i}>{ll}</p>
    );
  }

  render() {
    return (
      <div id={this.props.index} data-id={this.props.index} className="modal">
        <div className="modal-content">
          <div className="modal-header">
						<span data-id={this.props.index} className="close" onClick={this.props.closed}>&times;</span>
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
