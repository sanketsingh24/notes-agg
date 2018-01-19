import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Onebit extends Component {

  render() {
    return (
      <Link to={`/dept/${this.props.dept.dept_id}`} >
        <div className = "onebit" >
          <img id="image" className = "image" src= {this.props.dept.imge} alt={this.props.dept.dept_name} />
          <p id="texts" className = "texts" >{this.props.dept.dept_name}</p>
        </div>
      </Link>
    );
  }
}

Onebit.propTypes = {
  dept: PropTypes.Object.isRequired
};

export default Onebit;
