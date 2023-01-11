import { HomeContainer, ModulesContainer, RankingsContainer } from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { Module } from "../../components/Module";
import EmptySymbol from "../../assets/symbol-empty.svg";

export const Home = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <ModulesContainer>
        <h1>Módulos</h1>
        <Module />
        <Module />
        <Module />
      </ModulesContainer>
      <RankingsContainer>
        <div className="symbolCard">
          <h1>Emblemas</h1>
          <img src={EmptySymbol} />
          <p>Nenhum emblema encontrado!</p>
        </div>
      </RankingsContainer>
    </HomeContainer>
  );
};
