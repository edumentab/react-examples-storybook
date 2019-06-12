import React from "react";

export class Form extends React.Component {
  state = { field: "John Doe" };
  handleType = e => this.setState({ field: e.target.value });
  handleKeyPress = e => {
    if (e.key === "Enter") this.submitName();
  };
  submitName = () => {
    this.props.onSubmit(this.state.field);
    this.setState({ field: "" });
  };
  render() {
    return (
      <fieldset>
        <legend>Enter your name</legend>
        <input
          data-qa="name-field"
          type="text"
          onChange={this.handleType}
          onKeyPress={this.handleKeyPress}
          value={this.state.field}
        />
        <button data-qa="submit-btn" onClick={this.submitName}>
          Submit!
        </button>
      </fieldset>
    );
  }
}
