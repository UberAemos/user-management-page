import React from 'react'
import Form from "react-bootstrap/Form";
import { Field, ErrorMessage } from "formik";

export const FormikBootstrapFormGroup = ({label, type, name}) => (
  <Form.Group controlId="formBasic">
    <Form.Label>{label}</Form.Label>
    <Field name={name} render={({ field }) => (
        <Form.Control {...field} type={type} />
    )} />
    <ErrorMessage name={name} component="div" className="text-danger" />
  </Form.Group>
);
