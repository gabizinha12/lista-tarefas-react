import React from "react";
import ReactDOM from "react-dom";
import ItensListaTarefas from "./itens-lista-tarefas";
import Tarefa from "../models/tarefa.model";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("teste do componente que exibe um item na listagem de tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ItensListaTarefas tarefas={[]} recarregarTarefas={() => false} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
