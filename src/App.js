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
    streetAddress: "",
    city: "",
    zip: "",
    password: "",
    newPassword: "",
  };
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
    console.log(isSubmit);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 6) {
      errors.name = "Name must be at least 6 characters";
    } else {
      errors.name = "";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (values.email.match(emailRegex)) {
      errors.email = "Email is invalid";
    } else {
      errors.email = "";
    }

    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone must be at least 10 characters";
    } else if (isNaN(values.phone)) {
      errors.phone = "Phone must be a number";
    } else {
      errors.phone = "";
    }

    if (!values.plan) {
      errors.plan = "Plan is required";
    } else if (values.plan.length < 3) {
      errors.plan = "Plan must be at least 3 characters";
    } else {
      errors.plan = "";
    }

    if (!values.streetAddress) {
      errors.streetAddress = "Street Address is required";
    } else if (values.streetAddress.length < 6) {
      errors.streetAddress = "Street Address must be at least 6 characters";
    } else {
      errors.streetAddress = "";
    }

    if (!values.city) {
      errors.city = "City is required";
    } else if (values.city.length < 3) {
      errors.city = "City must be at least 3 characters";
    } else {
      errors.city = "";
    }

    if (!values.zip) {
      errors.zip = "Zip is required";
    } else if (values.zip.length < 3) {
      errors.zip = "Zip must be at least 3 characters";
    } else {
      errors.zip = "";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (values.password.match(/[a-z]/g) === null) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (values.password.match(/[A-Z]/g) === null) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (values.password.match(/[0-9]/g) === null) {
      errors.password = "Password must contain at least one number";
    } else if (values.password.match(/[!@#$%^&*]/g) === null) {
      errors.password = "Password must contain at least one special character";
    } else {
      errors.password = "";
    }

    if (!values.newPassword) {
      errors.newPassword = "New Password is required";
    } else if (!values.newPassword.match(values.password)) {
      errors.newPassword = "New Password must match Password";
    } else {
      errors.newPassword = "";
    }

    return errors;
  };

  const handleReset = () => {
    setValues(initValues);
    setErrors({});
  };

  return (
    <Form className="App" onSubmit={handleSubmit}>
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
          <Form.Group className="mb-3" controlId="validationCustom01">
            <LabelForm label="Full Name" />
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            <span className="text-danger">{errors.name}</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <LabelForm label="Email Address" />
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email} />
            <span className="text-danger">{errors.email}</span>
          </Form.Group>
          <Row md={2}>
            <Form.Group className="mb-3" controlId="validationCustom03">
              <LabelForm label="Phone Number" />
              <Form.Control
                type="text"
                name="phone"
                onChange={handleChange}
                value={values.phone}
              />
              <span className="text-danger">{errors.phone}</span>
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
              <Form.Group className="mb-3" controlId="validationCustom04">
                <LabelForm label="Plan" />
                <Form.Control
                  type="text"
                  name="plan"
                  onChange={handleChange}
                  value={values.plan}
                />
                <span className="text-danger">{errors.plan}</span>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
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
          <Form.Group className="mb-3" controlId="validationCustom05">
            <LabelForm label="Street Address" />
            <Form.Control
              type="text"
              name="streetAddress"
              onChange={handleChange}
              value={values.streetAddress}
            />
            <span className="text-danger">{errors.streetAddress}</span>
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="validationCustom06">
                <LabelForm label="City" />
                <Form.Control
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={values.city}
                />
                <span className="text-danger">{errors.city}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom07">
                <LabelForm label="ZIP/Postal Code" />
                <Form.Control
                  type="text"
                  name="zip"
                  onChange={handleChange}
                  value={values.zip}
                />
                <span className="text-danger">{errors.zip}</span>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" >
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
              <Form.Group className="mb-3">
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
              <Form.Group className="mb-3" controlId="validationCustom07">
                <LabelForm label="Password" />
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <span className="text-danger">{errors.password}</span>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="validationCustom08">
                <LabelForm label="New Password" />
                <Form.Control
                  type="password"
                  name="newPassword"
                  onChange={handleChange}
                  value={values.newPassword}
                />
                <span className="text-danger">{errors.newPassword}</span>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr></hr>

      {/* Button submit and cancel */}
      <Row md={12} className="d-flex flex-row-reverse">
        <Col md={2}>
        </Col>
        <Col md={2}>
          <Button variant="primary" type="submit" >
            Save
          </Button>
        </Col>
        <Col md={2}>
          <Button variant="secondary" type="reset" onClick={handleReset}>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default App;
