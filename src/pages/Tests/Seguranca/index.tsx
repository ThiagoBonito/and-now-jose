import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ClassContainer } from "./styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export const Seguranca = () => {
  const navigate = useNavigate();
  const url = window.location.href;
  const paths = url.split("/");

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

  const handleChange = (type: number) => {
    switch (type) {
      case 1:
        setOption1(true);
        setOption2(false);
        setOption3(false);
        setOption4(false);
        return;
      case 2:
        setOption1(false);
        setOption2(true);
        setOption3(false);
        setOption4(false);
        return;
      case 3:
        setOption1(false);
        setOption2(false);
        setOption3(true);
        setOption4(false);
        return;
      case 4:
        setOption1(false);
        setOption2(false);
        setOption3(false);
        setOption4(true);
        return;
    }
  };

  const handleFinishClass = () => {
    console.log("Finalizada!");
    navigate(`/Home/Feedback/${paths[paths.length - 1]}`);
    // navigate(`/Home/Modules/${paths[paths.length - 1]}`);
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
          <h5>Revisão Módulo 1</h5>
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
        <div className="options">
          <div>
            <FormControlLabel
              style={{ display: "flex", flex: 1 }}
              control={
                <Checkbox
                  checked={option1}
                  onChange={(e) => handleChange(1)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Label 1"
            />
          </div>
          <div>
            <FormControlLabel
              style={{ display: "flex", flex: 1 }}
              control={
                <Checkbox
                  checked={option2}
                  onChange={(e) => handleChange(2)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Label 2"
            />
          </div>
          <div>
            <FormControlLabel
              style={{ display: "flex", flex: 1 }}
              control={
                <Checkbox
                  checked={option3}
                  onChange={(e) => handleChange(3)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Label 3"
            />
          </div>
          <div>
            <FormControlLabel
              style={{ display: "flex", flex: 1 }}
              control={
                <Checkbox
                  checked={option4}
                  onChange={(e) => handleChange(4)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Label 4"
            />
          </div>
        </div>
        <div className="buttonsContainer">
          <div className="helpButtons">
            <button className="help">Usar Dica</button>
            <button className="skip">Pular Questão</button>
          </div>
          <button className="save" onClick={handleFinishClass}>
            Salvar Resposta
          </button>
        </div>
      </div>
    </ClassContainer>
  );
};
