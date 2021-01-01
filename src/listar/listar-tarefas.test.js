import React from "react";
import ReactDOM from "react-dom";
import ListarTarefas from "./listar-tarefas";
import MemoryRouter from "react-router";

describe("teste do componente de listagem de tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ListarTarefas />, div
      </MemoryRouter>
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
