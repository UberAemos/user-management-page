import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import { DefaultDialogBottom } from "./DefaultDialogBottom";

export default class ModalUserDialog extends Component {
  render() {
    return (
      <Modal show>
        <Modal.Header>{this.props.header}</Modal.Header>
        <Modal.Body>
          {this.props.body}
        </Modal.Body>
        <Modal.Footer>
          <DefaultDialogBottom
            onCancel={this.props.onCancel}
            onConfirm={this.props.onConfirm}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}
