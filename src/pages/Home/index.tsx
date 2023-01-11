import { HomeContainer, ModulesContainer, RankingsContainer } from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { Module } from "../../components/Module";
import EmptySymbol from "../../assets/symbol-empty.svg";
import { ModuleProps } from "../../components/Module";
import LogoWhatsapp from "../../assets/logo-whatsapp-icon.svg";

export const Home = () => {
  const modules: ModuleProps[] = [
    {
      idModule: 1,
      icon: {
        type: "image",
        children: <img src={LogoWhatsapp} />,
      },
      title: "Básico do WhatsApp",
      color: "green-300",
      watchedClass: 6,
      allClasses: 9,
    },
    {
      idModule: 2,
      icon: {
        type: "icon",
        name: "Globe",
      },
      title: "Navegação na Internet",
      color: "cyan-400",
      watchedClass: 3,
      allClasses: 18,
    },
    {
      idModule: 3,
      icon: {
        type: "icon",
        name: "ShieldCheckered",
      },
      title: "Segurança na Rede",
      color: "blue-200",
      watchedClass: 0,
      allClasses: 18,
    },
  ];

  return (
    <HomeContainer>
      <Sidebar />
      <ModulesContainer>
        <h1>Módulos</h1>
        {modules.map((module) => (
          <Module key={module.title} {...module} />
        ))}
      </ModulesContainer>
      <RankingsContainer>
        <div className="symbolCard">
          <h1>Emblemas</h1>
          <img src={EmptySymbol} />
          <p>Nenhum emblema encontrado!</p>
        </div>
        <div className="rankingCard">
          <h1>Ranking</h1>
        </div>
      </RankingsContainer>
    </HomeContainer>
  );
};
