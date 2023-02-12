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

  const handleClass = () => {
    localStorage.setItem("currentClass", title);
    console.log(title);
    localStorage.setItem("currentClassIsFinished", isFinished.toString());
    console.log(isFinished);
    navigate(`/Home/Classes/${module}`);
  };
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
        <button onClick={handleClass}>
          {isFinished ? "Revisar" : "Iniciar"}
        </button>
      </div>
    </ClassModule>
  );
};
