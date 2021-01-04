import React from "react";
import ReactDOM from "react-dom";
import ListarTarefas from "../listar/listar-tarefas";
import MemoryRouter from "react-router";
import { shallow } from "enzyme";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("teste do componente de listagem de tarefas", () => {
  it("deve renderizar o componente sem erros", () => {
    const component = shallow(<ListarTarefas />);
    expect(component).toMatchSnapshot();
  });
});
