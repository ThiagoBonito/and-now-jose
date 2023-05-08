import { CircularProgress } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { ClassDataProps } from "../WhatsApp";
import { ClassContainer } from "./styles";
import YouTube from "react-youtube";

export const Internet = () => {
  const navigate = useNavigate();
  const url = window.location.href;
  const paths = url.split("/");

  const storedClass = localStorage.getItem("currentClass");
  const storedEmail = localStorage.getItem("userEmail");
  const storedModule = localStorage.getItem("currentModule");
  const storedStatusClass = localStorage.getItem("currentClassIsFinished");
  const quantityClasses = localStorage.getItem("quantityClassesWatched");

  const [classData, setClassData] = useState<ClassDataProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFinish, setIsLoadingFinish] = useState(false);

  const handleBackModulePage = () => {
    localStorage.removeItem("currentClass");
    localStorage.removeItem("currentClassIsFinished");
    navigate(`/Home/Modules/${paths[paths.length - 1]}`);
  };

  const handleFinishClass = async () => {
    if (storedStatusClass === "true") {
      console.log("Revisada!");
      navigate(`/Home/Modules/${paths[paths.length - 1]}`);
    } else {
      await fetchUpdateClassesFinished(Number(quantityClasses));
      console.log("Finalizada!");
      navigate(`/Home/Modules/${paths[paths.length - 1]}`);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await api.post("/class", {
      auth: { title: storedClass },
    });
    if (data.length === 0) {
      setIsLoading(false);
      return toast.error("Erro ao trazer dados da Aula!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setClassData(data[0]);
      setIsLoading(false);
    }
  };

  const fetchUpdateClassesFinished = async (classeswatched: number) => {
    setIsLoadingFinish(true);
    if (classeswatched === 10) return;

    const { data } = await api.put("/finishClass", {
      auth: {
        classesWatched: classeswatched + 1,
        module: storedModule,
        title: storedClass,
        email: storedEmail,
      },
    });
    if (!data) {
      setIsLoadingFinish(false);
    } else {
      setIsLoadingFinish(false);
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
          <CircularProgress
            sx={{ color: "#00CFA8" }}
            size={128}
            thickness={2}
          />
        </div>
      ) : (
        <div className="contentClass">
          <div>
            <h5>Módulo 2</h5>
            <h2>{classData?.title ?? ""}</h2>
            <p
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: classData?.description ?? "" }}
            />
            {["Vídeo 1", "Vídeo 2"].map((data) => (
              <div className="video">
                <p>{data}:</p>
                <div>
                  <YouTube videoId="PSA8M0VRZhw" />
                </div>
              </div>
            ))}
          </div>
          <div className="buttonFinished">
            <button onClick={handleFinishClass}>
              {isLoadingFinish ? (
                <CircularProgress color="inherit" size={24} thickness={2} />
              ) : (
                "Finalizar Aula"
              )}
            </button>
          </div>
        </div>
      )}
    </ClassContainer>
  );
};
