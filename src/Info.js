import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDataRequest } from "./actions";

class Info extends Component {
  render() {
    return (
      <p>
        {!this.props.isFetching && (
          <button onClick={() => this.props.loadData()}>Show Remote IP</button>
        )}{" "}
        {this.props.isFetching && <span>Loading...</span>}
        {this.props.data}
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
