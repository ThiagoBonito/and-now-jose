import { CircularProgress } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { ClassContainer } from "./styles";

export type ClassDataProps = {
  id: number;
  title: string;
  description: string;
  image: string | null;
};

export const WhatsApp = () => {
  const navigate = useNavigate();
  const url = window.location.href;
  const paths = url.split("/");

  const storedClass = localStorage.getItem("currentClass");
  const storedStatusClass = localStorage.getItem("currentClassIsFinished");

  const [classData, setClassData] = useState<ClassDataProps>();
  const [isLoading, setIsLoading] = useState(false);

  const handleBackModulePage = () => {
    localStorage.removeItem("currentClass");
    localStorage.removeItem("currentClassIsFinished");
    navigate(`/Home/Modules/${paths[paths.length - 1]}`);
  };

  const handleFinishClass = () => {
    console.log("Finalizada!");
    navigate(`/Home/Modules/${paths[paths.length - 1]}`);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await api.post("/class", {
      auth: { title: storedClass },
    });
    if (data.length === 0) {
      console.log(data);
      setIsLoading(false);
      return toast.error("Erro ao trazer dados da Aula!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setClassData(data[0]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ClassContainer>
      <div className="backPage">
        <button className="button" onClick={handleBackModulePage}>
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
          <div>
            <h5>Módulo 1</h5>
            <h2>{classData?.title ?? ""}</h2>
            <p>{classData?.description ?? ""}</p>
          </div>
          <div className="buttonFinished">
            <button onClick={handleFinishClass}>Finalizar Aula</button>
          </div>
        </div>
      )}
    </ClassContainer>
  );
};
