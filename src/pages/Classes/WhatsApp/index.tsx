import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ClassContainer } from "./styles";

export const WhatsApp = () => {
  const navigate = useNavigate();
  const url = window.location.href;
  const paths = url.split("/");

  const handleFinishClass = () => {
    console.log("Finalizada!");
    navigate(`/Home/Modules/${paths[paths.length - 1]}`);
  };

  return (
    <ClassContainer>
      <div className="backPage">
        <button
          className="button"
          onClick={() => navigate(`/Home/Modules/${paths[paths.length - 1]}`)}
        >
          <ArrowLeft size={16} color="#17191C" weight="bold" />
          <p>Voltar</p>
        </button>
      </div>
      <div className="contentClass">
        <div>
          <h5>Módulo 1</h5>
          <h2>Básico do WhatsApp</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tempus ornare porta. Cras sit amet tellus egestas urna feugiat
            faucibus. Aenean vel quam eget urna eleifend aliquet. Aliquam
            laoreet ut dolor sit amet vulputate. Curabitur condimentum congue
            pellentesque. Pellentesque et leo non nulla elementum tristique. Sed
            porta augue vel bibendum convallis. Sed id blandit quam. Nulla sed
            sem et neque pellentesque accumsan. Suspendisse euismod interdum
            feugiat.
          </p>
        </div>
        <div className="buttonFinished">
          <button onClick={handleFinishClass}>Finalizar Aula</button>
        </div>
      </div>
    </ClassContainer>
  );
};
