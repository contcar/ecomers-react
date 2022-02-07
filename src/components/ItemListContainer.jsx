import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  function onAdd() {
    console.log("onAdd Execute.");
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Soy un Item de la Lista</Card.Title>
        <Card.Text>{greeting}</Card.Text>
        <ItemCount stock={5} initial={1} onAdd={() => onAdd()}></ItemCount>
      </Card.Body>
    </Card>
  );
}
