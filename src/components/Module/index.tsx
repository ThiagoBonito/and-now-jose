import { ArrowRight, Globe, ShieldCheckered } from "phosphor-react";
import { ModuleCard } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export type IconType =
  | {
      type: "icon";
      name: string;
    }
  | {
      type: "image";
      children: ReactNode;
    };

export type ModuleProps = {
  idModule: number;
  icon: IconType;
  route: string;
  title: string;
  color: keyof typeof defaultTheme;
  watchedClass: number;
  allClasses: number;
};

export const Module = ({
  idModule,
  icon,
  route,
  title,
  color,
  watchedClass,
  allClasses,
}: ModuleProps) => {
  const navigate = useNavigate();
  return (
    <ModuleCard color={color} progress={(watchedClass / allClasses) * 100}>
      <div className="backgroundCard">
        <div className="infoCard">
          <div className="iconCard">
            {icon.type === "image" ? (
              icon.children
            ) : icon.name === "ShieldCheckered" ? (
              <ShieldCheckered size={46} />
            ) : (
              <Globe size={46} />
            )}
          </div>
          <div className="nameCard">
            <h2>Módulo {idModule}</h2>
            <h2 className="title">{title}</h2>
          </div>
        </div>
        <div className="expandModule">
          <button onClick={() => navigate(`/Home/Modules/${route}`)}>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="progressClass">
        <div className="progressBar">
          <div className="progress" />
        </div>
        <p>
          {watchedClass}/{allClasses} Aulas Completas
        </p>
      </div>
    </ModuleCard>
  );
};
