import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import CreateCustomer from "./createcustomer";

export default class Customers extends Component {
  state = {
    modal: false,
  };

  toggleModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <React.Fragment>
        <CreateCustomer
          modal={this.state.modal}
          toggleModal={this.toggleModal}
        />

        <Button onClick={this.toggleModal}>Create Customer</Button>
      </React.Fragment>
    );
  }
}
