import React from "react";
import * as UI from "./style"
import AnimalsListContainer from '../containers/AnimalsList'

const Layout = ({ children }) => (
  <UI.Wrapper>
    <UI.Container>
      <UI.SideBar>
        Список животных
        <AnimalsListContainer />
      </UI.SideBar>
      <UI.Content>{children}</UI.Content>
    </UI.Container>
  </UI.Wrapper>
);

export default Layout;
