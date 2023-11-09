import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";

const renderField = ({ input, type, placeholder, label, disabled, readOnly, meta: { touched, error, warning } }) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></Input>
      {touched && ((error && <p style={{ color: "red" }}>{error}</p>) || (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

export default class FormComponent extends Component {
  render() {
    return (
      <>
        <div className="table-form">
          <h1 className="text-create">Create User</h1>
          <form>
            <FormGroup row>
              <Col md={6}>
                <FormGroup>
                  <Field type="text" name="name" component={renderField} label="Name :" />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Field type="text" name="address" component={renderField} label="Address :" />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Field type="text" name="email" component={renderField} label="Email :" />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Field type="text" name="phone" component={renderField} label="Phone :" />
                </FormGroup>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="12">
                <FormGroup>
                  <Button color="primary" type="submit" disabled>
                    Submit
                  </Button>
                </FormGroup>
              </Col>
            </FormGroup>
          </form>
        </div>
      </>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  // validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);
