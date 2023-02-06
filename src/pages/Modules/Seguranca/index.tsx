import { ArrowLeft } from "phosphor-react";
import { ClassCard } from "../../../components/ClassCard";
import { ClassContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { ReviewCard } from "../../../components/ReviewCard";

export const Seguranca = () => {
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
        <h2>Segurança na Rede</h2>
        <p>
          Olá Aluno! Bem vindo ao módulo Básico do WhatsApp, onde, neste módulo
          você ira aprender como se proteger na internet.
        </p>
        <h2>Revisão do Módulo</h2>
        <ReviewCard
          module={"Seguranca"}
          finishedClasses={3}
          totalClasses={9}
          backgroundColor={"blue-200"}
        />
        <h2>Aulas</h2>
        <p>(6/9 aulas completas)</p>
        <ClassCard
          id={1}
          module={"Seguranca"}
          title={"Instalando o Anti-vírus"}
          isFinished={true}
          backgroundColor={"blue-200"}
        />
        <ClassCard
          id={2}
          module={"Seguranca"}
          title={"Descobrir se um site é confiável"}
          isFinished={false}
          backgroundColor={"blue-200"}
        />
      </div>
    </ClassContainer>
  );
};
