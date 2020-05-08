import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ touched, error }) {
    // error and touched are properties of formValues object
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    ); // includes functions like onClick, onChange etc to input tag
    // console.log(formProps)   contains functions to implement input data in
    /*<input
        onChange={formProps.input.onChange} // For connecting input to DOM
        value={formProps.input.value}
      />*/
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    // console.log(this.props);   Gives a ton of functions to use provided by Redux Form like onSubmit, onClick
    // Every field (like label that is passed in Field tag get to input along input in formProps object)
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primaty">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title"; // Checks all Fields in form tag whose name property is same as error property(title) that we specify. Then that error is passed in the component function of that Field
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate, // Form keyword neccessary (shows a different state named ForCreatingStream in ReduxDexTools)
})(StreamForm);
