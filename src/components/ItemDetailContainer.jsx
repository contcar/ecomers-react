import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemDetail from "./itemDetail";
import ItemsService from "../js/ItemsService";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  let { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    ItemsService.GetItemById(itemId).then((response) => {
      console.log("Respuesta", response);
      setItem(response);
    });
  }, []);

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col md="4" className="mt-2 mb-2">
          <ItemDetail
            title={item.title}
            detail={item.description}
            img={item.pictureURL}
            price={item.price}
            stock={item.stock}
            initial={item.initial}
          ></ItemDetail>
        </Col>
      </Row>
    </Container>
  );
}
