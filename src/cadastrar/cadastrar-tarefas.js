import React, { useState } from "react";
import { Button, Form, Jumbotron, Modal } from "react-bootstrap";
import Tarefa from "../models/tarefa.model";
import { Link, useHistory, BrowserRouter } from "react-router-dom";

function CadastrarTarefa() {
  const [tarefa, setTarefa] = useState("");
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  const history = useHistory();

  function cadastrar(event) {
    event.preventDefault();
    setFormValidado(true);
    if (event.currentTarget.checkValidity() === true) {
      const tarefasDb = localStorage["tarefas"];
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      tarefas.push(new Tarefa(new Date().getTime(), tarefa, false));
      localStorage["tarefas"] = JSON.stringify(tarefas);
      setExibirModal(true);
    }
  }
  function handleTxtTarefa(event) {
    setTarefa(event.target.value);
  }

  function handleFecharModal() {
    history.push("/");
  }
  return (
    <div>
      <h1 className="text-dark text-center mt-4"> Cadastrar</h1>
      <Jumbotron>
        <Form validated={formValidado} noValidate onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a tarefa"
              minLength="5"
              maxLength="100"
              required
              value={tarefa}
              onChange={handleTxtTarefa}
              data-testid="txt-tarefa"
            />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="dark"
              type="submit"
              style={{ borderRadius: "50px" }}
              data-testid="btn-cadastrar"
            >
              Cadastrar
            </Button>
            <BrowserRouter>
              <Link to="/">
                <Button variant="info ml-2" style={{ borderRadius: "50px" }}>
                  Voltar
                </Button>
              </Link>
            </BrowserRouter>
          </Form.Group>
        </Form>
        <Modal
          show={exibirModal}
          onHide={handleFecharModal}
          data-testid="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
            <Modal.Body>Tarefa adicionada com sucesso!</Modal.Body>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
}
export default CadastrarTarefa;
