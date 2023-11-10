// FormComponent.jsx
import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import UserValidation from "../validations/userValidation";

const renderField = ({ input, type, placeholder, label, disabled, readOnly, meta: { touched, error, warning } }) => (
  <Row>
    <Col md="12">
      <Label htmlFor={input} className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input {...input} type={type} placeholder={placeholder} disabled={disabled} readOnly={readOnly}></Input>
      {touched && ((error && <p style={{ color: "red" }}>{error}</p>) || (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  componentDidMount() {
    const { initialize, user } = this.props;
    if (user && user.address && user.address.street) {
      initialize({
        name: user.name,
        address: user.address.street,
        email: user.email,
        phone: user.phone,
      });
    }
  }

  render() {
    const { title, handleSubmit } = this.props;
    return (
      <>
        <div className="table-form">
          <h1 className="text-create">{title}</h1>
          <form onSubmit={handleSubmit}>
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
                  <Button color="primary" type="submit" disabled={this.props.submitting}>
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
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default FormComponent;
