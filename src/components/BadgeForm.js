import React from "react";

class BadgeForm extends React.Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };

  handleClick = e => {
    console.log("Botton was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;