import { CheckCircle, Circle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { defaultTheme } from "../../styles/themes/default";
import { ClassModule } from "./styles";

type ClassCardProps = {
  id: number;
  module: string;
  title: string;
  isFinished: boolean;
  backgroundColor: keyof typeof defaultTheme;
};

export const ClassCard = ({
  id,
  module,
  title,
  isFinished,
  backgroundColor,
}: ClassCardProps) => {
  const navigate = useNavigate();
  return (
    <ClassModule backgroundColor={backgroundColor}>
      <div className="contentClass">
        <div>
          {isFinished ? (
            <CheckCircle size={74} color={"#FFF"} />
          ) : (
            <Circle size={74} color={"#FFF"} />
          )}
        </div>
        <div>
          <h3>Aula {id}</h3>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="goClass">
        <button
          onClick={() =>
            isFinished
              ? navigate(`/Home/Classes/${module}`)
              : navigate(`/Home/Classes/${module}`)
          }
        >
          {isFinished ? "Revisar" : "Iniciar"}
        </button>
      </div>
    </ClassModule>
  );
};
