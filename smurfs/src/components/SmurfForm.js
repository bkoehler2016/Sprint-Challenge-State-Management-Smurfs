import React, { useState } from "react";
import axios from "axios";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default function SmurfForm() {
  const [newSmurf, setNewSmurf] = useState({});

  const handleChange = event => {
    setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3333/smurfs", newSmurf).then(res => {
      console.log(res);
    });
  };

  return (
    <Form className="smurf-form" onSubmit={handleSubmit}>
      Name:{" "}
      <input
        type="text"
        name="name"
        value={newSmurf.name}
        onChange={handleChange}
      />
      Age:{" "}
      <input
        type="text"
        name="age"
        value={newSmurf.age}
        onChange={handleChange}
      />
      Height:{" "}
      <input
        type="text"
        name="height"
        value={newSmurf.height}
        onChange={handleChange}
      />
      <Button color="primary" type="submit">
        Add Smurf
      </Button>
    </Form>
  );
}
