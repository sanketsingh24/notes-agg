import React, {Component} from 'react';

class Onebit extends Component {
  handleClick = () => {
    this.props.onlick(this.props.id);
  };

  render() {
    return (
        <div className = "onebit" onClick={this.handleClick}>
          <img id="image" className = "image" src= {this.props.imge} alt={this.props.dept_name} />
          <p id="texts" className = "texts" >{this.props.dept_name}</p>
        </div>
    );
  }
}

export default Onebit;
