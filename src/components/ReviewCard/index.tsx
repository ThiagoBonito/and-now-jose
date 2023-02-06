import { defaultTheme } from "../../styles/themes/default";
import { DoughnutGraph } from "../DoughnutGraph";
import { ReviewContainer } from "./styles";
import { useNavigate } from "react-router-dom";

type ReviewCardProps = {
  module: string;
  finishedClasses: number;
  totalClasses: number;
  backgroundColor: keyof typeof defaultTheme;
};

export const ReviewCard = ({
  module,
  finishedClasses,
  totalClasses,
  backgroundColor,
}: ReviewCardProps) => {
  const navigate = useNavigate();
  return (
    <ReviewContainer
      isModuleFinished={finishedClasses / totalClasses === 1 ? true : false}
      backgroundColor={backgroundColor}
    >
      <div className="title">
        <h2>
          Revisão{" "}
          {finishedClasses / totalClasses === 1 ? "Liberada" : "Bloqueada"}!
        </h2>
        <p>Termine todas as aulas do módulo para liberar a revisão!</p>
      </div>
      <div className="graph">
        {finishedClasses / totalClasses === 1 ? (
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
