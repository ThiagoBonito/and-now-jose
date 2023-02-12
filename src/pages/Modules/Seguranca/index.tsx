import { ArrowLeft } from "phosphor-react";
import { ClassCard } from "../../../components/ClassCard";
import { ClassContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { ReviewCard } from "../../../components/ReviewCard";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { ModuleDataProps } from "../WhatsApp";

export const Seguranca = () => {
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem("userEmail");
  const storedModule = localStorage.getItem("currentModule");

  const [moduleData, setModuleData] = useState<ModuleDataProps>();
  const [isLoading, setIsLoading] = useState(false);

  const handleLeaveModule = () => {
    localStorage.removeItem("currentModule");
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
          <h2>Segurança na Rede</h2>
          <p>
            Olá Aluno! Bem vindo ao módulo Básico do WhatsApp, onde, neste
            módulo você ira aprender como se proteger na internet.
          </p>
          <h2>Revisão do Módulo</h2>
          <ReviewCard
            module={moduleData?.module ?? "Seguranca"}
            finishedClasses={moduleData?.classeswatched ?? 0}
            totalClasses={moduleData?.allclasses ?? 0}
            backgroundColor={"blue-200"}
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
              module={moduleData?.module ?? "Seguranca"}
              title={data.title}
              isFinished={data.isFinished}
              backgroundColor={"blue-200"}
            />
          ))}
        </div>
      )}
    </ClassContainer>
  );
};
