import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

library.add(fas);

export default function CartItem({
  title,
  img,
  price,
  quantity,
  onRemove,
  id,
}) {
  return (
    <Card className="text-center">
      <Card.Header className="cardHeaderDelete">
        <Button variant="light" size="sm" onClick={() => onRemove(id)}>
          X
        </Button>
      </Card.Header>
      <Card.Img height="600px" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-decoration-none">{title}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <h5>Total: {price * quantity}</h5>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
