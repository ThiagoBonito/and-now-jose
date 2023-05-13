import { Container, InfoContainer, RegisterContainer } from "./styles";
import CellphoneImage from "../../assets/cellphone-vector.svg";
import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";

export const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/register", {
        auth: {
          name: fullName,
          email: email,
          password: password,
          username: username,
          image: null,
        },
      });
      const createModules = await api.post("/createModulesUser", {
        auth: { email: email },
      });
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPhoto", "null");
      localStorage.setItem("userFullName", fullName);
      setIsLoading(false);
      navigate("/Home");
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      return toast.error(`Erro: ${error?.response?.data?.error}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Container>
      <InfoContainer>
        <h1>Faltam poucos passos para se tornar um Aluno!</h1>
        <div>
          <img src={CellphoneImage} />
        </div>
      </InfoContainer>
      <RegisterContainer>
        <div className="header">
          <button className="backPage" onClick={() => navigate("/")}>
            <ArrowLeft size={32} color="#17191C" weight="bold" />
          </button>
          <h1>Olá Novo Aluno!</h1>
        </div>
        <p>
          Bem vindo a nossa plataforma! Por favor, preencha os campos a seguir
          ou entre com sua conta google, para se tornar o nosso mais novo aluno
        </p>
        <input
          placeholder="Nome Completo"
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          placeholder="Endereço de E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Nome do Usuário"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="passwordContainer">
          <input
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="icon"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeSlash size={24} /> : <Eye size={24} />}
          </span>
        </div>
        <button
          className="login"
          disabled={!fullName || !email || !username || !password || isLoading}
          onClick={handleCreateUser}
        >
          {isLoading ? (
            <CircularProgress color="inherit" size={24} />
          ) : (
            "Registra-se"
          )}
        </button>
      </RegisterContainer>
    </Container>
  );
};
