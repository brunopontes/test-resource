import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const rest = {
      name: this.props.name,
      path: this.props.path,
      location: this.props.location,
      computedMatch: this.props.computedMatch,
    };

    return (
      <div>
        <Route {...rest} component={this.props.component} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
