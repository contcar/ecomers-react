import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import useFireStore from "../hooks/useFireStore";

const Checkout = ({ cartItems, totalToPay, clearCart, closeModal }) => {
  const orderItems = cartItems.map((ci) => {
    return { id: ci.id, title: ci.title, price: ci.price };
  });

  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: orderItems,
    total: totalToPay,
  });
  const [isButtonLoading, setButtonLoading] = useState(false);

  const { GenerateOrder } = useFireStore();

  useEffect(() => {}, [isButtonLoading]);

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    GenerateOrder({ order: form }).then((response) => {
      setButtonLoading(false);
      closeModal();
      clearCart();
      alert("Orden creada con éxito: " + response.id);
    });
  };

  const isValidForm = () => {
    return !form.buyer.name || !form.buyer.email || !form.buyer.phone;
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={form.buyer.name}
          onChange={handleChange}
          name="name"
          placeholder="Nombre"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          value={form.buyer.phone}
          onChange={handleChange}
          placeholder="Introduzca un telefono"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.buyer.email}
          onChange={handleChange}
          placeholder="Introduzca un email"
        />
      </Form.Group>
      <div className="text-end">
        <Button
          variant="primary"
          disabled={isButtonLoading || isValidForm()}
          onClick={!isButtonLoading ? handleSubmit : null}
        >
          {isButtonLoading ? <Spinner animation="grow" /> : "Enviar Orden"}
        </Button>
      </div>
    </Form>
  );
};

export default Checkout;
