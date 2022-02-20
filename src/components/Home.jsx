import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

export default function Home() {
  let { categoryId } = useParams();

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <ItemListContainer categoryFilterBy={categoryId}></ItemListContainer>
      </Row>
    </Container>
  );
}
