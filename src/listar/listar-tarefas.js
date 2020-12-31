import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListarTarefas() {
  return (
    <Card className="text-center">
      <Card.Header>Lista de Tarefas</Card.Header>
      <Card.Body>
        <Card.Title>Tarefas</Card.Title>
        <Card.Text>
          <Link to="/cadastrar">
            <Button variant="dark" style={{ borderRadius: "50px" }}>
              Me adicione clicando aqui
            </Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ListarTarefas;
