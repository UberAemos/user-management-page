import React, { Component } from "react";
import ModalUserDialog from "./modalDialog/ModalUserDialog";

export default class DeleteUserPanel extends Component {
  constructor(props) {
    super(props);

    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  cancel() {
    this.props.onCancel();
  }

  confirm() {
    this.props.onDelete();
  }

  render() {
    let user = this.props.user;
    return (
      <ModalUserDialog
        onCancel={this.cancel}
        title="Kullanıcı Silme"
        body={
          user.name +
          " " +
          user.surname +
          " kullanıcısını silmek istediğinize emin misiniz?"
        }
        onConfirm={this.confirm}
      />
    );
  }
}
