import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  return (
    <div>
      <Row bg="dark">
        <Col>
          <Button
            disabled={count <= 0}
            variant="light"
            onClick={() => setCount(count - 1)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </Button>
        </Col>
        <Col>{count}</Col>
        <Col>
          <Button
            disabled={count == stock}
            variant="danger"
            onClick={() => setCount(count + 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Button
          disabled={count <= 0}
          variant="outline-primary"
          onClick={() => onAdd(count)}
          size="sm"
        >
          <span>Añadir al carrito</span>
        </Button>
      </Row>
    </div>
  );
}
