import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Onebit extends Component {


  render() {
    return (
      <Link to={`/${this.props.id}`}>
        <div className = "onebit" >
          <img id="image" className = "image" src= {this.props.image} alt={this.props.description} />
          <p id="texts" className = "texts" >{this.props.description}</p>
        </div>
      </Link>
    );
  }
}

export default Onebit;
