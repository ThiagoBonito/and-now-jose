import { ArrowRight } from "phosphor-react";
import { ModuleCard } from "./styles";
import LogoWhatsapp from "../../assets/logo-whatsapp-icon.svg";

export const Module = () => {
  return (
    <ModuleCard>
      <div className="backgroundCard">
        <div className="infoCard">
          <div className="iconCard">
            <img src={LogoWhatsapp}></img>
          </div>
          <div className="nameCard">
            <h2>Módulo 1</h2>
            <h2 className="title">Básico do WhatsApp</h2>
          </div>
        </div>
        <div className="expandModule">
          <button>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="progressClass">
        <div className="progressBar">
          <div className="progress" />
        </div>
        <p>6/9 Aulas Completas</p>
      </div>
    </ModuleCard>
  );
};
