import { defaultTheme } from "../../styles/themes/default";
import { DoughnutGraph } from "../DoughnutGraph";
import { ReviewContainer } from "./styles";
import { useNavigate } from "react-router-dom";

type ReviewCardProps = {
  module: string;
  isModuleFinished: boolean;
  finishedClasses: number;
  totalClasses: number;
  backgroundColor: keyof typeof defaultTheme;
};

export const ReviewCard = ({
  module,
  isModuleFinished,
  finishedClasses,
  totalClasses,
  backgroundColor,
}: ReviewCardProps) => {
  const navigate = useNavigate();
  return (
    <ReviewContainer
      isModuleFinished={isModuleFinished}
      backgroundColor={backgroundColor}
    >
      <div className="title">
        <h2>Revisão {isModuleFinished ? "Liberada" : "Bloqueada"}!</h2>
        <p>Termine todas as aulas do módulo para liberar a revisão!</p>
      </div>
      <div className="graph">
        {isModuleFinished ? (
          <div className="goReview">
            <button onClick={() => navigate(`/Home/Tests/${module}`)}>
              Iniciar Revisão
            </button>
          </div>
        ) : (
          <DoughnutGraph
            finishedClasses={finishedClasses}
            totalClasses={totalClasses}
          />
        )}
      </div>
    </ReviewContainer>
  );
};
