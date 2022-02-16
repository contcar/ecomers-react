import React from "react";
import { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import Item from "./Item";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const itemMock = {
    id: 1,
    title: "Boku no Hero Academia",
    description:
      "Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedirá perseguir su sueño: ser un gran héroe como el legendario All-Might. ",
    price: "500 ARS",
    pictureURL:
      "https://images-na.ssl-images-amazon.com/images/I/814vVsbVvGL.jpg",
    stock: 5,
    initial: 1,
  };
  useEffect(() => {
    const dataPromise = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(itemMock);
      }, 2000);
    });

    dataPromise.then((responseData) => {
      setItem(responseData);
    });
  }, []);

  return (
    <Col md="4" className="mt-2 mb-2">
      <Item
        title={item.title}
        detail={item.description}
        img={item.pictureURL}
        price={item.price}
        stock={item.stock}
        initial={item.initial}
      ></Item>
    </Col>
  );
}
