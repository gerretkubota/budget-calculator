import React from 'react';
import PropTypes from 'prop-types';

import './main.css';

const Alert = ({ show, type, text }) => (
  <>{show ? <div className={`alert alert-${type}`}>{text}</div> : null}</>
);

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Alert;
