import React, { Component } from "react";
import { Form, Button, Row, Col, Card, Modal } from "react-bootstrap";
import ReactDOM from "react-dom";
import { handelFormChange } from "../helper/methodhelper";

export default class CreateCustomer extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "male",
    address: "",
    alert: false,
  };

  handleSubmit = (event) => {
    console.log(this.state);
    this.setState({ alert: true });
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          size="lg"
          centered
          show={this.props.modal}
          onHide={this.props.toggleModal}
        >
          <Modal.Header closeButton className="border-0">
            <Modal.Title>Enter Customer Details</Modal.Title>
          </Modal.Header>
          <Card>
            <Card.Body closeButton>
              <Form>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    controlId="firstname"
                    onChange={handelFormChange.bind(this)}
                  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter First Name" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="lastname"
                    onChange={handelFormChange.bind(this)}
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Last Name" />
                  </Form.Group>
                </Form.Row>

                <Form.Group
                  controlId="email"
                  onChange={handelFormChange.bind(this)}
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group
                  controlId="phone"
                  onChange={handelFormChange.bind(this)}
                >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>

                <Form.Group
                  controlId="gender"
                  onChange={handelFormChange.bind(this)}
                >
                  <Form.Label> Gender</Form.Label>
                  <Form.Row className="ml-2">
                    <Form.Check
                      inline
                      defaultChecked
                      type="radio"
                      label="Male"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Female"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Other"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Form.Row>
                </Form.Group>

                <Form.Group
                  controlId="address"
                  onChange={handelFormChange.bind(this)}
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" placeholder="Enter Address" />
                </Form.Group>
                <Button variant="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Modal>
      </React.Fragment>
    );
  }
}
