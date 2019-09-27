import React from 'react'
import Button from 'react-bootstrap/Button'

export const DefaultButton = ({ onClick, type, formId, variant, children }) => (
    <Button type={type} form={formId} onClick={onClick} variant={variant}>
        {children}
    </Button>
)