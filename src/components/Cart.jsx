import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContextProvicer";
import { Button, Col, Container, Row } from "react-bootstrap";

function Cart() {
  const { cartItems, RemoveItem, CleareState } = useContext(CartContext);
  if (cartItems.length > 0) {
    return (
      <Container>
        <Row className="mt-5 text-center">
          <Col>
            <Button variant="dark" onClick={CleareState}>
              Limpiar Carrito
            </Button>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          {cartItems.map((i) => (
            <Col key={i.id} md="4" className="mt-2 mb-2">
              <CartItem
                id={i.id}
                title={i.title}
                detail={i.description}
                img={i.pictureURL}
                price={i.price}
                quantity={i.quantity}
                onRemove={RemoveItem}
              ></CartItem>
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row className="mt-5 justify-content-center">
          <Col>
            <h1>Su carrito esta vacio.</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
