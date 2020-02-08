import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

export default function SmurfCard(props) {
  console.log(props);
  return (
    <Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
      <CardTitle>{props.smurf.name}</CardTitle>
      <CardText>Age: {props.smurf.age}</CardText>
      <CardText>Height: {props.smurf.height}</CardText>
    </Card>
  );
}
