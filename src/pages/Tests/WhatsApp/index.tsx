import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ClassContainer } from "./styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { AndNowJoseContext } from "../../../contexts/AndNowJoseContext";

export type OptionsType = {
  id: number;
  value: string;
};

export type QuestionsTest = {
  id: number;
  answer: OptionsType;
  options: OptionsType[];
  question: string;
};

export type TestDataProps = {
  id: number;
  module: string;
  questions: QuestionsTest[];
};

export const WhatsApp = () => {
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
  const [skipQuestion, setSkipQuestion] = useState(false);

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

  const [idPositionSave, setIdPositionSave] = useState(0);

  const handleChange = (type: number) => {
    switch (type) {
      case 1:
        setOption1(true);
        setOption2(false);
        setOption3(false);
        setOption4(false);
        setIdPositionSave(1);
        return;
      case 2:
        setOption1(false);
        setOption2(true);
        setOption3(false);
        setOption4(false);
        setIdPositionSave(2);
        return;
      case 3:
        setOption1(false);
        setOption2(false);
        setOption3(true);
        setOption4(false);
        setIdPositionSave(3);
        return;
      case 4:
        setOption1(false);
        setOption2(false);
        setOption3(false);
        setOption4(true);
        setIdPositionSave(4);
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

  const handleskipQuestion = () => {
    setCurrentAnswer(false);
    setSkipQuestion(true);
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
    setIdPositionSave(0);
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
    setIdPositionSave(0);
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

  useEffect(() => {
    if (skipQuestion && !currentAnswer) {
      handleFinishClass();
      setSkipQuestion(false);
    }
  }, [skipQuestion, currentAnswer]);

  return (
    <ClassContainer
      isSelectSomeOption={option1 || option2 || option3 || option4}
      currentOptionSelected={idPositionSave}
    >
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
              <h5>Revisão Módulo 1</h5>
              <h2>Básico do WhatsApp</h2>
              <h5>{testData?.questions[currentEtapa]?.id}° Questão</h5>
              <p
                style={{ whiteSpace: "pre-wrap" }}
                dangerouslySetInnerHTML={{
                  __html: testData?.questions[currentEtapa].question ?? "",
                }}
              />
            </div>
            <div className="options">
              <div>
                <FormControlLabel
                  style={{ display: "flex", flex: 1, height: "2rem" }}
                  control={
                    <Checkbox
                      sx={{
                        color: "#00E272",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
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
                      sx={{
                        color: "#00E272",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
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
                      sx={{
                        color: "#00E272",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
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
                      sx={{
                        color: "#00E272",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
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
                {/* <button className="help">Usar Dica</button> */}
                <button className="skip" onClick={handleskipQuestion}>
                  Pular Questão
                </button>
              </div>
              <button
                className="save"
                disabled={!option1 && !option2 && !option3 && !option4}
                onClick={handleFinishClass}
              >
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
