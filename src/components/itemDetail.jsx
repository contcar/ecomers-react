import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Modal,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({
  title,
  img,
  detail,
  price,
  stock,
  initial,
  itemAdded,
  onAdd,
}) {
  return (
    <Card className="text-center">
      <Card.Img height="600px" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-decoration-none">{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price} ARS</ListGroupItem>
        </ListGroup>
        {!itemAdded ? (
          <ItemCount stock={stock} initial={initial} onAdd={onAdd}></ItemCount>
        ) : (
          <Row className="mt-2">
            <Link to={"/cart"} className="text-decoration-none text-reset">
              <Button variant="outline-primary">
                <span>Ir al carrito</span>
              </Button>
            </Link>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
}
