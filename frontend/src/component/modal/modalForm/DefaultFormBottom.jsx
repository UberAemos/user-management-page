import React, { PureComponent } from "react";
import { CancelButton } from "../../buttons/CancelButton";
import { SubmitButton } from "../../buttons/SubmitButton";

export const DefaultFormBottom = ({ onCancel, formId }) => (
    <div>
      <CancelButton onClick={onCancel} />
      <SubmitButton formId={formId} />
    </div>
);