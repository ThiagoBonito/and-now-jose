import { ArrowLeft } from "phosphor-react";
import { ClassCard } from "../../../components/ClassCard";
import { ClassContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { ReviewCard } from "../../../components/ReviewCard";

export const Internet = () => {
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
        <h2>Navegação na Internet</h2>
        <p>
          Olá Aluno! Bem vindo ao módulo Navegação na Internet, onde, neste
          módulo você ira aprender ferramentas para navegação no seu dia a dia.
        </p>
        <h2>Revisão do Módulo</h2>
        <ReviewCard
          isModuleFinished={true}
          finishedClasses={6}
          totalClasses={9}
          backgroundColor={"cyan-400"}
        />
        <h2>Aulas</h2>
        <p>(6/9 aulas completas)</p>
        <ClassCard
          id={1}
          module={"Internet"}
          title={"Conhecendo o Google"}
          isFinished={true}
          backgroundColor={"cyan-400"}
        />
        <ClassCard
          id={2}
          module={"Internet"}
          title={"Pesquisas Avançadas"}
          isFinished={false}
          backgroundColor={"cyan-400"}
        />
      </div>
    </ClassContainer>
  );
};
