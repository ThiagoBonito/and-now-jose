import {
  Container,
  LoginContainer,
  InfoContainer,
  LoginContent,
} from "./styles";
import Logo from "../../assets/logo.jpeg";
import OldManVector from "../../assets/old-man-vector.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { CircularProgress } from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/login", {
        auth: { email: email, password: password },
      });
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userFullName", data.name);
      setIsLoading(false);
      navigate("/Home");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return toast.error("Usuário ou senha incorretas!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Container>
      <LoginContainer>
        <LoginContent>
          <img src={Logo} />
          <h1>Bem-vindo, estudante!</h1>
          <p>
            Bem-vindo de volta! Por gentileza, informe seu usuário e senha para
            ingressar na plataforma.
          </p>
          <input
            placeholder="Nome do usuário"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="optionsPassword">
            <div>Lembrar senha</div>
            <a>Esqueci minha senha</a>
          </div>
          <button className="login" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              "Iniciar sessão"
            )}
          </button>
          <ToastContainer />
          <div className="register">
            <p>Não Tem uma Conta?</p>
            <button className="navigate" onClick={() => navigate("/Cadastro")}>
              Clique aqui, e se Inscreva!
            </button>
          </div>
        </LoginContent>
      </LoginContainer>
      <InfoContainer>
        <h1>Seja Bem Vindo ao E Agora José?</h1>
        <p>
          A plataforma que tem como missão, ajudar você a aprender e compreender
          as funcionalidades de seu celular!
        </p>
        <img src={OldManVector} />
      </InfoContainer>
    </Container>
  );
};
