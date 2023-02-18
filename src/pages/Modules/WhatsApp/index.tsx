import { ArrowLeft } from "phosphor-react";
import { ClassCard } from "../../../components/ClassCard";
import { ClassContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { ReviewCard } from "../../../components/ReviewCard";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

export type Classes = {
  id: number;
  title: string;
  isFinished: boolean;
};

export type ModuleDataProps = {
  id: number;
  module: string;
  classeswatched: number;
  allclasses: number;
  classes: Classes[];
};

export const WhatsApp = () => {
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem("userEmail");
  const storedModule = localStorage.getItem("currentModule");

  const [moduleData, setModuleData] = useState<ModuleDataProps>();
  const [isLoading, setIsLoading] = useState(false);

  const handleLeaveModule = () => {
    localStorage.removeItem("currentModule");
    localStorage.removeItem("quantityClassesWatched");
    navigate("/Home");
  };

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await api.post("/currentModule", {
      auth: { module: storedModule, email: storedEmail },
    });
    if (!data) {
      setIsLoading(false);
      return toast.error("Erro ao trazer dados do Módulo!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setModuleData(data[0]);
      localStorage.setItem(
        "quantityClassesWatched",
        String(data[0].classeswatched)
      );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ClassContainer>
      <div className="backPage">
        <button className="button" onClick={handleLeaveModule}>
          <ArrowLeft size={16} color="#17191C" weight="bold" />
          <p>Voltar</p>
        </button>
      </div>
      {isLoading ? (
        <div className="loadingContainer">
          <CircularProgress color="success" size={128} thickness={2} />
        </div>
      ) : (
        <div className="contentClass">
          <h5>Módulo 1</h5>
          <h2>Básico do WhatsApp</h2>
          <p>
            Olá Aluno! Bem vindo ao módulo Básico do WhatsApp, onde, neste
            módulo você ira aprender desde como baixar o Aplicativo Whatsapp,
            até como mandar mensagens, realizar ligações, mandar vídeos, e etc.
          </p>
          <h2>Revisão do Módulo</h2>
          <ReviewCard
            module={moduleData?.module ?? "WhatsApp"}
            finishedClasses={moduleData?.classeswatched ?? 0}
            totalClasses={moduleData?.allclasses ?? 0}
            backgroundColor={"green-300"}
          />
          <h2>Aulas</h2>
          <p>
            ({moduleData?.classeswatched ?? 0}/{moduleData?.allclasses ?? 0}{" "}
            aulas completas)
          </p>
          {moduleData?.classes?.map((data) => (
            <ClassCard
              key={data.id}
              id={data.id}
              module={moduleData?.module ?? "WhatsApp"}
              title={data.title}
              isFinished={data.isFinished}
              backgroundColor={"green-300"}
            />
          ))}
        </div>
      )}
    </ClassContainer>
  );
};
