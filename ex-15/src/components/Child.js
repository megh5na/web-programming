import React from 'react';
import PropTypes from 'prop-types';

function Child({ msg }) {
  return <p>{msg}</p>;
}

Child.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Child;