import React from "react";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";

export default function Item({ title, detail, img, price, initial, stock }) {
  return (
    <Card>
      <Card.Img height="600px" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        <div className="d-flex justify-content-center">
          <h3>{price}</h3>
        </div>
      </Card.Body>
      <Card.Body>
        <ItemCount stock={stock} initial={initial}></ItemCount>
      </Card.Body>
    </Card>
  );
}
