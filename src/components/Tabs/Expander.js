import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expander extends Component {
	// componentWillUnmount(){
	// 	this.props.fetchSubjectWithRedux(this.props.id,this.props.courseId)
	// }
  render() {
    return (    
			<div className="expander">
				<i className="material-icons" >close</i>
				Expander
      </div>
    );
  }
}

// Onebit.propTypes = {
//   dept: PropTypes.object
// };

export default Expander;
