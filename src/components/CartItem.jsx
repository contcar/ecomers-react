import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Image, ListGroupItem } from "react-bootstrap";

export default function CartItem({
  title,
  img,
  price,
  quantity,
  onRemove,
  id,
}) {
  return (
    <ListGroupItem className="d-flex " style={{ height: 120 }}>
      <div className="float-left" style={{ width: 100 }}>
        <Image
          rounded="true"
          style={{ width: 75 }}
          className="mh-100"
          src={img}
        ></Image>
      </div>
      <div className="vr" style={{ marginLeft: 10, marginRight: 10 }}></div>
      <div className="float-left d-flex w-25 justify-content-center align-items-center ">
        <h4 className="text-center">{title}</h4>
      </div>
      <div className="vr" style={{ marginLeft: 10, marginRight: 10 }}></div>
      <div className="float-left d-flex w-25 justify-content-center align-items-center ">
        <h4>Unidades: {quantity}</h4>
      </div>
      <div className="vr" style={{ marginLeft: 10, marginRight: 10 }}></div>
      <div className="float-left d-flex w-25 justify-content-center align-items-center ">
        <h4>Total: ${price * quantity}</h4>
      </div>
      <div className="vr" style={{ marginLeft: 10, marginRight: 10 }}></div>
      <div className="float-left d-flex w-25 justify-content-center align-items-center ">
        <Button variant="danger" size="sm" onClick={() => onRemove(id)}>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </Button>
      </div>
    </ListGroupItem>
  );
}
