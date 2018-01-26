import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Onebit extends Component {
	componentWillUnmount(){
		this.props.fetchSubjectWithRedux(this.props.id,this.props.courseId)
	}
  render() {
    return (
        <div className = "onebit" >
          <img id="image" className = "image" src= {this.props.imge} alt={this.props.dept_name} />
          <p id="texts" className = "texts" >{this.props.dept_name}</p>
        </div>
    );
  }
}

Onebit.propTypes = {
  dept: PropTypes.object
};

export default Onebit;
 /**
  *       <Link to={`/dept/${this.props.id}`} >
          </Link>
  */