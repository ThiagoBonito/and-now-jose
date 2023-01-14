import { ArrowLeft } from "phosphor-react";
import { ClassCard } from "../../../components/ClassCard";
import { ClassContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { ReviewCard } from "../../../components/ReviewCard";

export const WhatsApp = () => {
  const navigate = useNavigate();

  return (
    <ClassContainer>
      <div className="backPage">
        <button className="button" onClick={() => navigate("/Home")}>
          <ArrowLeft size={16} color="#17191C" weight="bold" />
          <p>Voltar</p>
        </button>
      </div>
      <div className="contentClass">
        <h5>Módulo 1</h5>
        <h2>Básico do WhatsApp</h2>
        <p>
          Olá Aluno! Bem vindo ao módulo Básico do WhatsApp, onde, neste módulo
          você ira aprender desde como baixar o Aplicativo Whatsapp, até como
          mandar mensagens, realizar ligações, mandar vídeos, e etc.
        </p>
        <h2>Revisão do Módulo</h2>
        <ReviewCard
          isModuleFinished={false}
          finishedClasses={6}
          totalClasses={9}
        />
        <h2>Aulas</h2>
        <p>(6/9 aulas completas)</p>
        <ClassCard id={1} title={"Instalando o WhatsApp"} isFinished={true} />
        <ClassCard id={2} title={"Configurando sua conta"} isFinished={false} />
      </div>
    </ClassContainer>
  );
};
