import React from "react";

import { FormikBootstrapFormGroup } from "../FormikBootstrapFormGroup";
import { MaskedFormikBootstrapFormGroup } from "../MaskedFormikBootstrapFormGroup";

export const UserFormBody = ({}) => (
  <div>
    <FormikBootstrapFormGroup label="Ad" type="text" name="name" />
    <FormikBootstrapFormGroup label="Soyad" type="text" name="surname" />
    <MaskedFormikBootstrapFormGroup
      label="Telefon"
      type="tel"
      name="phone"
      mask="\01111111111"
    />
  </div>
);
