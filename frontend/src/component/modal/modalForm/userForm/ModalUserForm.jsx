import React, { Component } from "react";
import { UserValidatedFormBody } from "./UserValidatedFormBody";
import Modal from 'react-bootstrap/Modal'
import { DefaultFormBottom } from "../DefaultFormBottom";

export default class ModalUserForm extends Component {
  render() {
    return (
      <Modal show>
        <Modal.Header>{this.props.header}</Modal.Header>
        <Modal.Body>
          <UserValidatedFormBody
            initialInput={this.props.initialInput}
            onSubmit={this.props.onSubmit}
            formId={this.props.formId}
          />
        </Modal.Body>
        <Modal.Footer>
          <DefaultFormBottom
            onCancel={this.props.onCancel}
            formId={this.props.formId}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}
