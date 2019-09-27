import React from "react";
import { DefaultButton } from "./DefaultButton";

export const SubmitButton = ({formId}) => (
  <DefaultButton
    type="submit"
    variant="success"
    formId={formId}
  >
    Onayla
  </DefaultButton>
);
