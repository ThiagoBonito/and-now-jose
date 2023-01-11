import {
  Container,
  LoginContainer,
  InfoContainer,
  LoginContent,
} from "./styles";
import Logo from "../../assets/logo.jpeg";
import OldManVector from "../../assets/old-man-vector.svg";

export const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <LoginContent>
          <img src={Logo} />
          <h1>Bem Vindo Aluno!</h1>
          <p>
            Bem vindo de volta aluno! Por favor, informe seu Usuário e Senha,
            para entrar na plataforma
          </p>
          <input placeholder="Nome do usuário" />
          <input placeholder="Digite sua senha" />
          <div className="optionsPassword">
            <div>Lembrar senha</div>
            <a>Esqueci minha senha</a>
          </div>
          <button className="login">Iniciar sessão</button>
          <div className="register">
            <p>Não Tem uma Conta?</p>
            <a>Clique aqui, e se Inscreva!</a>
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
