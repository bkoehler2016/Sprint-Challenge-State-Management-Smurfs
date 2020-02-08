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
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="name" sm={2}></Label>
        <Col sm={10}>
          <Input
            type="text"
            name="name"
            value={newSmurf.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="age" sm={2}></Label>
        <Col sm={10}>
          <Input
            type="text"
            name="age"
            value={newSmurf.age}
            placeholder="Age"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="height" sm={2}></Label>
        <Col sm={10}>
          <Input
            type="text"
            name="height"
            value={newSmurf.height}
            placeholder="Height"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button color="primary" type="submit">
            Add Smurf
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
