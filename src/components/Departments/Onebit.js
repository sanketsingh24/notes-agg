import React, {Component} from 'react';

class Onebit extends Component {


  render() {
    return (
        <div className = "onebit" >
          <img id="image" className = "image" src= {this.props.image} alt={this.props.description} />
          <p id="texts" className = "texts" >{this.props.description}</p>
        </div>
    );
  }
}

export default Onebit;
