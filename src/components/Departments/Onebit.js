import React, {Component} from 'react';
import {Link} from 'react-router'

class Onebit extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
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
