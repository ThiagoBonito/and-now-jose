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
import { Eye, EyeSlash, UserCircle } from "phosphor-react";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/login", {
        auth: { email: email, password: password },
      });
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPhoto", String(data.image));
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
            Bem-vindo de volta! Por gentileza, informe o seu usuário e senha nos
            campos abaixo para ingressar na plataforma e retomar o seu
            progresso.
          </p>
          <div className="passwordContainer">
            <input
              placeholder="Nome do usuário"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="icon">
              <UserCircle size={24} color={"#425675"} />
            </span>
          </div>
          <div className="passwordContainer">
            <input
              placeholder="Digite sua senha"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="icon"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeSlash size={24} color={"#425675"} />
              ) : (
                <Eye size={24} color={"#425675"} />
              )}
            </span>
          </div>
          {/* <div className="optionsPassword">
            <div>Lembrar senha</div>
            <a>Esqueci minha senha</a>
          </div> */}
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
        <h1>
          Seja Bem Vindo ao <i>E Agora José!</i>
        </h1>
        <p>
          A nossa plataforma tem a missão de te ajudar a compreender as
          múltiplas funcionalidades que um celular contém através de aulas
          didáticas e recompensas ao progredir em sua jornada. Vamos nessa!
        </p>
        <img src={OldManVector} />
      </InfoContainer>
    </Container>
  );
};
