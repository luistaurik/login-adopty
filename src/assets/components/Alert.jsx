import React from "react";
import PropTypes from "prop-types";
import "./Alert.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from "react-bootstrap/esm/Image";

function Alert({ error }) {
  const { message, display, color } = error;

  return (
    <>
      <div className={`${display} form-alert alert alert-${color}`} role="alert">
        {message}
      </div>
    </>
  );
}

Alert.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    display: PropTypes.string,
  }).isRequired,
};

export default Alert;