import { FeedbackContainer } from "./styles";
import FeedbackPhoto from "../../../assets/feedback-platina.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AndNowJoseContext } from "../../../contexts/AndNowJoseContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const Seguranca = () => {
  const { correctAnswers, handleUserRanking } = useContext(AndNowJoseContext);

  const storedModule = localStorage.getItem("currentModule");
  const storedEmail = localStorage.getItem("userEmail");

  const navigate = useNavigate();

  const [userRanking, setUserRanking] = useState<number>();
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
      if (Number(data[0].ranking) < (userRanking ?? 0)) {
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
    await fetchData();
    navigate("/Home/Modules/Seguranca");
  };

  useEffect(() => {
    setUserRanking(handleUserRanking(correctAnswers));
  }, [correctAnswers]);

  return (
    <FeedbackContainer>
      <div className="feedback">
        <div className="img">
          <img src={FeedbackPhoto} />
        </div>
        <h2>Parabéns! Você conquistou uma medalha de Platina!</h2>
        <p>
          Você acertou todas as questões da Revisão do módulo{" "}
          <b>Básicos de Whatsapp!</b> Agora este emblema será exibido no seu
          perfil, e além disso sua posição no ranking de alunos será elevada por
          conta de sua mais nova conquista!
        </p>
        <button className="button" onClick={handleReturnModule}>
          Retornar ao Módulo
        </button>
      </div>
    </FeedbackContainer>
  );
};
