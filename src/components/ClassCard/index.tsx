import { CheckCircle, Circle } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { ClassModule } from "./styles";

type ClassCardProps = {
  id: number;
  title: string;
  isFinished: boolean;
  backgroundColor: keyof typeof defaultTheme;
};

export const ClassCard = ({
  id,
  title,
  isFinished,
  backgroundColor,
}: ClassCardProps) => {
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
        <button>{isFinished ? "Revisar" : "Iniciar"}</button>
      </div>
    </ClassModule>
  );
};
