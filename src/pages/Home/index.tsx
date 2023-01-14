import {
  HomeContainer,
  ModulesContainer,
  RankingsContainer,
  User,
} from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { Module } from "../../components/Module";
import EmptySymbol from "../../assets/symbol-empty.svg";
import { ModuleProps } from "../../components/Module";
import LogoWhatsapp from "../../assets/logo-whatsapp-icon.svg";
import AmorimPhoto from "../../assets/amorim.jpg";
import { Trophy } from "phosphor-react";

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
          <div className="topUsers">
            <div className="users">
              <User color={"silver-500"}>
                <img src={AmorimPhoto} />
                <Trophy size={24} color={"#ABB1BA"} weight="bold" />
                <h5>Lucas Amorim</h5>
                <h6>5/6 Emblemas</h6>
              </User>
              <User color={"gold-500"}>
                <img src={AmorimPhoto} />
                <Trophy size={24} color={"#FFAD33"} weight="bold" />
                <h5>Lucas Amorim</h5>
                <h6>6/6 Emblemas</h6>
              </User>
              <User color={"cooper-500"}>
                <img src={AmorimPhoto} />
                <Trophy size={24} color={"#CD7F32"} weight="bold" />
                <h5>Lucas Amorim</h5>
                <h6>5/6 Emblemas</h6>
              </User>
            </div>
          </div>
          <div className="restUsers">
            <div className="user">
              <p>#4</p>
              <div>
                <img src={AmorimPhoto} />
                <p>Lucas Amorim</p>
              </div>
              <p style={{ fontWeight: "normal", fontSize: "1rem" }}>4/6</p>
            </div>
            <div className="user">
              <p>#5</p>
              <div>
                <img src={AmorimPhoto} />
                <p>Lucas Amorim</p>
              </div>
              <p style={{ fontWeight: "normal", fontSize: "1rem" }}>4/6</p>
            </div>
            <div className="user">
              <p>#38</p>
              <div>
                <img src={AmorimPhoto} />
                <p>Lucas Amorim</p>
              </div>
              <p style={{ fontWeight: "normal", fontSize: "1rem" }}>4/6</p>
            </div>
          </div>
        </div>
      </RankingsContainer>
    </HomeContainer>
  );
};
