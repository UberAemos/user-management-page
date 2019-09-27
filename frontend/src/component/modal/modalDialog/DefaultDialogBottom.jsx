import React, { PureComponent } from "react";
import { CancelButton } from "../../buttons/CancelButton";
import { ConfirmButton } from "../../buttons/ConfirmButton";

export const DefaultDialogBottom = ({ onCancel, onConfirm }) => (
    <div>
      <CancelButton onClick={onCancel} />
      <ConfirmButton onClick={onConfirm} />
    </div>
);