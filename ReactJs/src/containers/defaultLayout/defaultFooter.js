import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    return (
      <Fragment>
        <span><a href="/">Test </a> &copy; 2019</span>
        <span className="ml-auto">Powered by <a href="https://gitlab.com/bspontes">b. s. pontes</a></span>
      </Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
