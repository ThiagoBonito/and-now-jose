import {
  HomeContainer,
  LoadingContainer,
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
import { useContext, useEffect, useState } from "react";
import { AndNowJoseContext } from "../../contexts/AndNowJoseContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

export const Home = () => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");

  const [modules, setModules] = useState<ModuleProps[]>([]);
  const [username, setUsername] = useState(storedFullName ?? "");

  const [isLoading, setIsLoading] = useState(false);

  const fetchModules = async () => {
    setIsLoading(true);
    const { data } = await api.post("/modules", {
      auth: { email: storedEmail },
    });
    if (!data) {
      return toast.error("Erro ao trazer os Módulos!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setModules(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <HomeContainer>
      <Sidebar name={username} />
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress color="success" size={128} thickness={2} />
        </LoadingContainer>
      ) : (
        <>
          <ModulesContainer>
            <h1>Módulos</h1>
            {modules.map((module, index) => (
              <Module
                key={module.name}
                id={index + 1}
                route={module.route}
                name={module.name}
                classeswatched={module.classeswatched}
                allclasses={module.allclasses}
                email={module.email}
              />
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
        </>
      )}
    </HomeContainer>
  );
};
