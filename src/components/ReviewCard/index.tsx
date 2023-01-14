import { DoughnutGraph } from "../DoughnutGraph";
import { ReviewContainer } from "./styles";

type ReviewCardProps = {
  isModuleFinished: boolean;
  finishedClasses: number;
  totalClasses: number;
};

export const ReviewCard = ({
  isModuleFinished,
  finishedClasses,
  totalClasses,
}: ReviewCardProps) => {
  return (
    <ReviewContainer isModuleFinished={isModuleFinished}>
      <div className="title">
        <h2>Revisão {isModuleFinished ? "Liberada" : "Bloqueada"}!</h2>
        <p>Termine todas as aulas do módulo para liberar a revisão!</p>
      </div>
      <div className="graph">
        {isModuleFinished ? (
          <div className="goReview">
            <button>Iniciar Revisão</button>
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
