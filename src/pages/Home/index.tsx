import { HomeContainer, LoadingContainer, ModulesContainer } from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { Module } from "../../components/Module";

import { ModuleProps } from "../../components/Module";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { RankingsResponse } from "../Rankings";
import { StatsCard } from "../../components/StatsCard";

export const Home = () => {
  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");

  const [modules, setModules] = useState<ModuleProps[]>([]);

  const [ranking, setRanking] = useState<RankingsResponse[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await Promise.all([
        api.post("/modules", {
          auth: { email: storedEmail },
        }),
        api.get("/rankings/0"),
      ]);
      const data = res.map((res) => res.data);

      // data[0] === modulesData
      if (!data[0]) {
        return toast.error("Erro ao trazer os Módulos!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setModules(data[0]);
      }

      // data[1] === rankingData
      if (!data[1]) {
        return toast.error("Erro ao trazer os Rankings!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setRanking(data[1]);
      }
    } catch {
      throw Error("Promise failed");
    }
    setIsLoading(false);
  };

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
    fetchData();
  }, []);

  return (
    <HomeContainer>
      <Sidebar name={storedFullName ?? ""} />
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
          <StatsCard data={ranking} />
        </>
      )}
    </HomeContainer>
  );
};
