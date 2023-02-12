import { ArrowRight, Globe, ShieldCheckered } from "phosphor-react";
import { ModuleCard } from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LogoWhatsapp from "../../assets/logo-whatsapp-icon.svg";
import { AndNowJoseContext } from "../../contexts/AndNowJoseContext";

export type ModuleProps = {
  id: number;
  name: string;
  classeswatched: number;
  allclasses: number;
  email: string;
  route: string;
};

export const Module = ({
  id,
  route,
  name,
  classeswatched,
  allclasses,
}: ModuleProps) => {
  const navigate = useNavigate();

  const handleModule = () => {
    localStorage.setItem("currentModule", route);
    navigate(`/Home/Modules/${route}`);
  };

  return (
    <ModuleCard
      color={
        route == "WhatsApp"
          ? "green-300"
          : route == "Seguranca"
          ? "blue-200"
          : "cyan-400"
      }
      progress={(classeswatched / allclasses) * 100}
    >
      <div className="backgroundCard">
        <div className="infoCard">
          <div className="iconCard">
            {route === "WhatsApp" ? (
              <img src={LogoWhatsapp} />
            ) : route === "Seguranca" ? (
              <ShieldCheckered size={46} />
            ) : (
              <Globe size={46} />
            )}
          </div>
          <div className="nameCard">
            <h2>Módulo {id}</h2>
            <h2 className="title">{name}</h2>
          </div>
        </div>
        <div className="expandModule">
          <button onClick={handleModule}>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="progressClass">
        <div className="progressBar">
          <div className="progress" />
        </div>
        <p>
          {classeswatched}/{allclasses} Aulas Completas
        </p>
      </div>
    </ModuleCard>
  );
};
