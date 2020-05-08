import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);   Gives a ton of functions to use provided by Redux Form like onSubmit, onClick
    // Every field (like label that is passed in Field tag get to input along input in formProps object)
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
