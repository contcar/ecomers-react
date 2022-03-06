import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "./Item";

export default function ItemList({ items }) {
  return items.map((i) => (
    <Col key={i.id} md="4" className="mt-2 mb-2">
      <Link to={`/item/${i.id}`} className="text-decoration-none text-black">
        <Item
          key={i.id}
          title={i.title}
          detail={i.description}
          img={i.image}
        ></Item>
      </Link>
    </Col>
  ));
}
