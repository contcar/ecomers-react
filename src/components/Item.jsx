import React from "react";
import { Card } from "react-bootstrap";

export default function Item({ title, img, price }) {
  return (
    <Card className="text-center">
      <Card.Img height="600px" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
