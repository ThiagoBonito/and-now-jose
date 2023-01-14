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

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (username === "ti@eagorajose.com" && password === "eagorajose") {
      return navigate("/Home");
    } else {
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button className="login" onClick={handleLogin}>
            Iniciar sessão
          </button>
          <ToastContainer />
          <div className="register">
            <p>Não Tem uma Conta?</p>
            <a href="/Cadastro">Clique aqui, e se Inscreva!</a>
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
