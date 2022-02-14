import React from "react";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";

export default function Item({ title, detail, img }) {
  return (
    <Card>
      <Card.Img height="600px" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        {/* <ItemCount stock={5} initial={1}></ItemCount> */}
      </Card.Body>
    </Card>
  );
}
