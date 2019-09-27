import React from "react";
import { DefaultButton } from "./DefaultButton";

export const ConfirmButton = ({ onClick }) => (
  <DefaultButton
    type="button"
    variant="success"
    onClick={onClick}
  >
    Onayla
  </DefaultButton>
);
