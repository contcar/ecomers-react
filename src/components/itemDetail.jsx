import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function ItemDetail({
  title,
  img,
  detail,
  price,
  stock,
  initial,
}) {
  return (
    <Card>
      <Card.Img height="600px" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-decoration-none">{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price}</ListGroupItem>
        </ListGroup>
        <ItemCount stock={stock} initial={initial}></ItemCount>
      </Card.Body>
    </Card>
  );
}
