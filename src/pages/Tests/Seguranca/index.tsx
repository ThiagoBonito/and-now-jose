import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ClassContainer } from "./styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useEffect, useState } from "react";
import { TestDataProps } from "../WhatsApp";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { AndNowJoseContext } from "../../../contexts/AndNowJoseContext";

export const Seguranca = () => {
  const { addCorrectAnswer, resetCorrectAnswer } =
    useContext(AndNowJoseContext);

  const navigate = useNavigate();
  const url = window.location.href;
  const paths = url.split("/");

  const storedModule = localStorage.getItem("currentModule");

  const [isLoading, setIsLoading] = useState(false);

  const [testData, setTestData] = useState<TestDataProps>();

  const [currentEtapa, setCurrentEtapa] = useState<number>(0);

  const [currentAnswer, setCurrentAnswer] = useState(false);

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

  const checkIsCorrect = (value: string) => {
    const isCorrect = testData?.questions[currentEtapa]?.answer.value === value;

    if (isCorrect) {
      setCurrentAnswer(true);
      console.log("Correta");
    } else {
      setCurrentAnswer(false);
      console.log("Errado");
    }
  };

  const fetchTestData = async () => {
    setIsLoading(true);
    const { data } = await api.post("/test", {
      auth: { module: storedModule },
    });
    if (!data) {
      setIsLoading(false);
      return toast.error("Erro ao trazer dados da Revisão!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setTestData(data[0]);
      setIsLoading(false);
    }
  };

  const handleFinishClass = () => {
    if (currentAnswer) {
      addCorrectAnswer();
    }

    if (testData?.questions[currentEtapa + 1]) {
      setCurrentEtapa((prev) => prev + 1);
    } else {
      console.log("Finalizada!");
      navigate(`/Home/Feedback/${paths[paths.length - 1]}`);
    }
  };

  useEffect(() => {
    setCurrentEtapa(0);
    fetchTestData();
    resetCorrectAnswer();
  }, []);

  useEffect(() => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
  }, [currentEtapa]);

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
        {isLoading ? (
          <div className="isloading">
            <CircularProgress color="success" size={128} thickness={2} />
          </div>
        ) : (
          <>
            <div className="question">
              <h5>Revisão Módulo 3</h5>
              <h2>Segurança na Rede</h2>
              <p>{testData?.questions[currentEtapa].question}</p>
            </div>
            <div className="options">
              <div>
                <FormControlLabel
                  style={{ display: "flex", flex: 1, height: "2rem" }}
                  control={
                    <Checkbox
                      checked={option1}
                      onChange={(e) => {
                        handleChange(1);
                        checkIsCorrect(
                          testData?.questions[currentEtapa].options[0].value ??
                            ""
                        );
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={testData?.questions[currentEtapa].options[0].value}
                />
              </div>
              <div>
                <FormControlLabel
                  style={{ display: "flex", flex: 1, height: "2rem" }}
                  control={
                    <Checkbox
                      checked={option2}
                      onChange={(e) => {
                        handleChange(2);
                        checkIsCorrect(
                          testData?.questions[currentEtapa].options[1].value ??
                            ""
                        );
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={testData?.questions[currentEtapa].options[1].value}
                />
              </div>
              <div>
                <FormControlLabel
                  style={{ display: "flex", flex: 1, height: "2rem" }}
                  control={
                    <Checkbox
                      checked={option3}
                      onChange={(e) => {
                        handleChange(3);
                        checkIsCorrect(
                          testData?.questions[currentEtapa].options[2].value ??
                            ""
                        );
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={testData?.questions[currentEtapa].options[2].value}
                />
              </div>
              <div>
                <FormControlLabel
                  style={{ display: "flex", flex: 1, height: "2rem" }}
                  control={
                    <Checkbox
                      checked={option4}
                      onChange={(e) => {
                        handleChange(4);
                        checkIsCorrect(
                          testData?.questions[currentEtapa].options[3].value ??
                            ""
                        );
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={testData?.questions[currentEtapa].options[3].value}
                />
              </div>
            </div>
            <div className="buttonsContainer">
              <div className="helpButtons">
                <button className="help">Usar Dica</button>
                <button className="skip">Pular Questão</button>
              </div>
              <button className="save" onClick={handleFinishClass}>
                {testData?.questions[currentEtapa + 1]
                  ? "Salvar Resposta"
                  : "Finalizar Revisão"}
              </button>
            </div>
          </>
        )}
      </div>
    </ClassContainer>
  );
};
