import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
  render() {
    return (
      <div className="float-loading">
        <div className="loading">
          <center>
            <ReactLoading color="#20a8d8" height="70px" width="100px" />
            <span>{this.props.msg}</span>
          </center>
        </div>
      </div>
    );
  }
}

export default Loading;
