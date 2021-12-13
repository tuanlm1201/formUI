import React from "react";
import { Form } from "react-bootstrap";

export default function LabelForm({label}) {
    return (
        <Form.Label>
            {label}
        </Form.Label>
    );
}