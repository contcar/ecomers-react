import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemDetail from "./itemDetail";
import { GetItemById } from "../services/ItemsService";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

export default function ItemDetailContainer() {
  let { itemId } = useParams();
  const [item, setItem] = useState({});
  const [itemAdded, setitemAdded] = useState(false);

  useEffect(() => {
    GetItemById(itemId).then((response) => {
      setItem(response);
    });
  }, []);

  const { AddItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    AddItem(item, quantity);
    setitemAdded(true);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col md="4" className="mt-2 mb-2">
          <ItemDetail
            title={item.title}
            detail={item.description}
            img={item.image}
            price={item.price}
            stock={item.stock}
            initial={1}
            itemAdded={itemAdded}
            onAdd={onAdd}
          ></ItemDetail>
        </Col>
      </Row>
    </Container>
  );
}
