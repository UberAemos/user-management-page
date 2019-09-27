import React, { PureComponent } from "react";

import { Formik, Form } from "formik";
import { UserFormBody } from "./UserFormBody";
export const UserValidatedFormBody = ({ initialInput, onSubmit, formId }) => (
  <Formik
    validateOnBlur={false}
    validateOnChange={false}
    validate={values => {
      let errors = {};
      if (!values.name) errors.name = "Kullanıcı adı giriniz";
      if (!values.surname) errors.surname = "Kullanıcı soyadı giriniz";
      if (values.phone.includes("_") && values.phone.length > 0)
        errors.phone = "Yanlış bir telefon numarası girdiniz";
      return errors;
    }}
    initialValues={
      initialInput
        ? {
            name: initialInput.name,
            surname: initialInput.surname,
            phone: initialInput.phone
          }
        : {
            name: "",
            surname: "",
            phone: ""
          }
    }
    onSubmit={onSubmit}
  >
    <Form id={formId} >
      <UserFormBody />
    </Form>
  </Formik>
);
