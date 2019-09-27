import React, { Component } from "react";
import ModalUserForm from "./modalForm/userForm/ModalUserForm";

export default class CreateUserModalDialog extends Component {
  constructor(props) {
    super(props);

    this.cancel = this.cancel.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  cancel() {
    this.props.onCancel();
  }

  addUser(values) {
    if (values.phone.includes("_")) values.phone = "";
    let user = {
      name: values.name,
      surname: values.surname,
      phone: values.phone
    };
    this.props.onAdd(user);
  }

  render() {

    return (
      <ModalUserForm
        header="Kullanıcı Ekle"
        onSubmit={this.addUser}
        onCancel={this.cancel}
        formId="createUserForm"
        initialInput=""
      />
    );
  }
}
