import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import LabelForm from "./component/LabelForm";
import { useState, useEffect } from "react";

function App() {
  const initValues = {
    name: "",
    email: "",
    phone: "",
    plan: "",
    billing: "",
    streetAddress: "",
    city: "",
    country: "",
    zip: "",
    province: "",
    password: "",
    newPassword: "",
  };
  const [values, setValues] = useState(initValues);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    console.log(setError(validate(values)));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+$/;
    if (!values.name) {
      errors.name = "Name is required";
    } 

    return errors;
  };

  return (
    <Form className="App">
      <header className="App-header">
        <h1>Settings</h1>
      </header>
      <hr></hr>

      {/* Account */}
      <Row className="d-flex">
        <Col md={4}>
          <LabelForm label="Account" className="font-weight-bold" />
        </Col>
        <Col md={8}>
          <Form.Group className="mb-3" controlId="ControlAccount">
            <LabelForm label="Full Name" />
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            <LabelForm />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlAccount">
            <LabelForm label="Email Address" />
            <Form.Control type="email" />
          </Form.Group>
          <Row md={2}>
            <Form.Group className="mb-3" controlId="ControlAccount">
              <LabelForm label="Phone Number" />
              <Form.Control type="number" />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <hr></hr>

      {/* Billing */}
      <Row>
        <Col md={4}>
          <LabelForm label="Billing" className="font-weight-bolder" />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="ControlBilling">
                <LabelForm label="Plan" />
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="ControlBilling">
                <LabelForm label="Billing Interval" />
                <Form.Select defaultValue="Monthly">
                  <option>Monthly</option>
                  <option>Yearly</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr></hr>

      {/* Business Address */}
      <Row className="d-flex">
        <Col md={4}>
          <LabelForm label="Street Address" className="font-weight-bold" />
        </Col>
        <Col md={8}>
          <Form.Group className="mb-3" controlId="ControlBusinessAddress">
            <LabelForm label="Street Address" />
            <Form.Control type="text" />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="ControlBusinessAddress">
                <LabelForm label="City" />
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlBusinessAddress">
                <LabelForm label="ZIP/Postal Code" />
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="ControlBusinessAddress">
                <LabelForm label="Province" />
                <Form.Select defaultValue="Ontario">
                  <option>Ontario</option>
                  <option>British Columbia</option>
                  <option>Alberta</option>
                  <option>Manitoba</option>
                  <option>Quebec</option>
                  <option>Saskatchewan</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlBusinessAddress">
                <LabelForm label="Country" />
                <Form.Select defaultValue="Canada">
                  <option>Canada</option>
                  <option>New York</option>
                  <option>United States</option>
                  <option>Country2</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr></hr>

      {/* Change  Password */}
      <Row className="d-flex">
        <Col md={4}>
          <LabelForm label="Change Password" className="font-weight-bold" />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="ControlPassword">
                <LabelForm label="Password" />
                <Form.Control type="password" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="ControlPassword">
                <LabelForm label="New Password" />
                <Form.Control type="password" />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr></hr>

      {/* Button submit and cancel */}
      <Row md={3} className="d-flex flex-row-reverse">
        <Col md={2}>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </Col>
        <Col md={2}>
          <Button variant="secondary" type="reset">
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default App;
