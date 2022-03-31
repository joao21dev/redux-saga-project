import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDataUARequest } from "./actions";

class UserAgent extends Component {
  render() {
    return (
      <p>
        {!this.props.isFetching && (
          <button onClick={() => this.props.loadData()}>Show User-Agent</button>
        )}{" "}
        {this.props.isFetching && <span>Loading...</span>}
        {this.props.data}
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataUARequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent);
