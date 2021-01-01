import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListarTarefas from "./listar/listar-tarefas";
import CadastrarTarefas from "./cadastrar/cadastrar-tarefas";
import AtualizarTarefas from "./atualizar/atualizar-tarefas";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListarTarefas} />
        <Route exact path="/cadastrar" component={CadastrarTarefas} />
        <Route exact path="/atualizar/:id" component={AtualizarTarefas} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
