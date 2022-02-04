import React from "react";
import { Card } from "react-bootstrap";

export default function ItemListContainer({ greeting }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Soy un Item de la Lista</Card.Title>
        <Card.Text>{greeting}</Card.Text>
      </Card.Body>
    </Card>
  );
}
