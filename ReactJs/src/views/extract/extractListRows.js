import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class UserListRows extends Component {

  render() {
    const model = this.props.rows ? this.props.rows : [];

    return (model.map(function (obj, idx) {
      return (
        <tr key={idx}>
          <td>{obj.DateLaunch}</td>
          <td>{obj.Description}</td>
          <td>{obj.Number}</td>
          <td>{obj.Location}</td>
          <td>{obj.DateConfirmation}</td>
          <td>{obj.BankDetailsComplete}</td>
          <td>{obj.FinalValueLocal}</td>
        </tr>
      );
    }, this));
  }
}

export default withRouter(UserListRows);
