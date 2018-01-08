import React, {Component} from 'react';
import {Link} from 'react-router'

class Onebit extends Component {
  handleClick = () => {
    console.log(this.props.description);
  };

  render() {
    return (
      <div className = "onebit" onClick={this.handleClick}>
        <img id="image" className = "image" src= {this.props.image} alt={this.props.description} />
        <p id="texts" className = "texts" >{this.props.description}</p>
      </div>
    );
  }
}

export default Onebit;
