import { DefaultButton } from "./DefaultButton";
import React from "react";

export const CancelButton = ({ onClick }) => (
  <DefaultButton type="button" onClick={onClick} variant="danger">
    İptal
  </DefaultButton>
);
