import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";

function ListarTarefas() {
  return (
    <Card className="text-center">
      <Card.Header>Lista de Tarefas</Card.Header>
      <Card.Body>
        <Card.Title>Tarefas</Card.Title>
        <Card.Text>
          <Router>
            <Link to="/cadastrar">
              <Button variant="dark">Me adicione clicando aqui</Button>
            </Link>
          </Router>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ListarTarefas;
