import { FeedbackContainer } from "./styles";
import FeedbackPhoto from "../../../assets/feedback-platina.svg";
import { useNavigate } from "react-router-dom";

export const Seguranca = () => {
  const navigate = useNavigate();
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
        <button
          className="button"
          onClick={() => navigate("/Home/Modules/Seguranca")}
        >
          Retornar ao Módulo
        </button>
      </div>
    </FeedbackContainer>
  );
};
