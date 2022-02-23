import React from "react";
import { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({
  title,
  img,
  detail,
  price,
  stock,
  initial,
}) {
  const [itemAdded, setItemAdded] = useState(false);

  const onAdd = () => {
    console.log("wepa");
    setItemAdded(true);
  };
  return (
    <Card>
      <Card.Img height="600px" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-decoration-none">{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price}</ListGroupItem>
        </ListGroup>
        {!itemAdded ? (
          <ItemCount stock={stock} initial={initial} onAdd={onAdd}></ItemCount>
        ) : (
          <Row className="mt-2">
            <Link to={"/cart"} className="text-decoration-none text-reset">
              <Button variant="outline-primary">
                <span>Finalizar compra</span>
              </Button>
            </Link>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
}
