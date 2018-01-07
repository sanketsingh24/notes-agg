import React, {Component} from 'react';
import '../../../css/dialogbo.css';

export default class Dialogbox extends Component {

  look (numb, i) {
    let ll = numb;
    return(
      <p key={i}>{ll}</p>
    );
  }

  render() {
    return (
      <div id={this.props.index} className="modal">
        <div className="modal-content">
          <div className="modal-header">
						<h2>Semester</h2>
          </div>
          <div className="modal-body">
            <a href="/courses">{this.props.number.map(this.look)}</a>
          </div>
        </div>
      </div>
    );
  }
}
