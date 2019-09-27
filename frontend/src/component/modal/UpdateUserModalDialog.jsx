import React, { Component } from "react";
import ModalUserForm from "./modalForm/userForm/ModalUserForm";

export default class UpdateUserModalDialog extends Component {
  constructor(props) {
    super(props);

    this.cancel = this.cancel.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  cancel() {
    this.props.onCancel();
  }

  updateUser(values) {
    if (values.phone.includes("_")) values.phone = "";
    let user = {
      id: this.props.user.id,
      name: values.name,
      surname: values.surname,
      phone: values.phone
    };
    this.props.onUpdate(user);
  }

  render() {
    let user = this.props.user;

    return (
      <ModalUserForm
        header="Kullanıcı Güncelle"
        onSubmit={this.updateUser}
        onCancel={this.cancel}
        formId="updateUserForm"
        initialInput={user}
      />
    );
  }
}
