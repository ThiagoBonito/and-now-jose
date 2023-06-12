import { FeedbackContainer } from "./styles";
import FeedbackPhoto from "../../../assets/feedback-platina.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  AndNowJoseContext,
  TestEmblem,
} from "../../../contexts/AndNowJoseContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const WhatsApp = () => {
  const { correctAnswers, handleUserRanking, handleUserTestEmblem } =
    useContext(AndNowJoseContext);

  const storedModule = localStorage.getItem("currentModule");
  const storedEmail = localStorage.getItem("userEmail");

  const navigate = useNavigate();

  const [userRanking, setUserRanking] = useState<number>();
  const [userEmblem, setUserEmblem] = useState<TestEmblem>({
    result: "",
    resultText: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await api.post("/checkRanking", {
      auth: { email: storedEmail, module: storedModule },
    });
    if (data.length === 0) {
      await fetchInsert();
      setIsLoading(false);
    } else {
      if (Number(data[0].ranking) > (userRanking ?? 0)) {
        await fetchUpdate();
      }
      setIsLoading(false);
    }
  };

  const fetchUpdate = async () => {
    const { data } = await api.put("/updateRanking", {
      auth: { email: storedEmail, ranking: userRanking, module: storedModule },
    });
    if (!data) {
      return toast.error("Erro ao atualizar o Ranking!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      return toast.success("Atualizado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const fetchInsert = async () => {
    const { data } = await api.post("/insertRanking", {
      auth: { email: storedEmail, ranking: userRanking, module: storedModule },
    });
    if (!data) {
      return toast.error("Erro ao criar o Ranking!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      return toast.success("Criado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleReturnModule = async () => {
    if (userRanking !== 5) {
      await fetchData();
    }
    navigate("/Home/Modules/WhatsApp");
  };

  useEffect(() => {
    setUserRanking(handleUserRanking(correctAnswers));
  }, [correctAnswers]);

  useEffect(() => {
    if (userRanking) {
      setUserEmblem(
        handleUserTestEmblem(storedModule ?? "", userRanking, correctAnswers)
      );
    }
  }, [userRanking]);

  return (
    <FeedbackContainer>
      <div className="feedback">
        <div className="img">
          <img src={userEmblem.result} />
        </div>
        <h2>{userEmblem.resultText}</h2>
        <p>{userEmblem.description}</p>
        <button
          className="button"
          onClick={handleReturnModule}
          disabled={isLoading}
        >
          Retornar ao Módulo
        </button>
      </div>
    </FeedbackContainer>
  );
};
