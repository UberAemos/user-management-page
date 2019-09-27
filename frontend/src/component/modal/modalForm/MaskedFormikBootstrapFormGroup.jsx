import React from 'react'
import Form from "react-bootstrap/Form";
import { Field, ErrorMessage } from "formik";
import MaskedFormControl from 'react-bootstrap-maskedinput'

export const MaskedFormikBootstrapFormGroup = ({label, type, name, mask}) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Field name={name} render={({ field }) => (
        <MaskedFormControl mask={mask} {...field} type={type} />
    )} />
    <ErrorMessage name={name} render={msg => <Form.Control.Feedback type="invalid">{msg}</Form.Control.Feedback>} />
  </Form.Group>
);
