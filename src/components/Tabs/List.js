import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
	// componentWillUnmount(){
	// 	this.props.fetchSubjectWithRedux(this.props.id,this.props.courseId)
    // }
  look () {
      console.log(this.props.closeId);
      document.getElementById(this.props.closeId).style.height="100px";
  }  

  render() {
    return (    
		<button onClick={this.look.bind(this)} type="button">{this.props.label}</button>
    );
  }
}

// Onebit.propTypes = {
//   dept: PropTypes.object
// };

export default List;