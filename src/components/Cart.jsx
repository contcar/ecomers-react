import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContextProvider";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

function Cart() {
  const { cartItems, RemoveItem, CleareState, GetTotalPrice } =
    useContext(CartContext);
  if (cartItems.length > 0) {
    return (
      <Container>
        <Row className="mt-5 justify-content-center">
          <Col md="8" className="p-5">
            <ListGroup>
              {cartItems.map((i) => (
                <CartItem
                  id={i.id}
                  title={i.title}
                  detail={i.description}
                  img={i.image}
                  price={i.price}
                  quantity={i.quantity}
                  onRemove={RemoveItem}
                ></CartItem>
              ))}
            </ListGroup>
            <Row className="mt-5 text-end">
              <Col>
                <Button variant="dark" onClick={CleareState}>
                  Limpiar Carrito
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center p-5 border rounded">
            <div>
              <h2>Total a pagar: ${GetTotalPrice()}</h2>
            </div>
            <div className="mt-2">
              <Button>Finalizar compra</Button>
            </div>
          </Col>
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
