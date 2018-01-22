import React from 'react';
import PropTypes from 'prop-types';

const Header = ({message}) => {
  return (
    <h1>
      {message}
    </h1>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

export default Header;
