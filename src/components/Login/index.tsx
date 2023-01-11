import { Container, LoginContainer, InfoContainer } from "./styles";
import OldManVector from "../../assets/old-man-vector.svg";

export const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <img src=""></img>
        <h1>Bem Vindo Aluno!</h1>
        <p>
          Bem vindo de volta aluno! Por favor, informe seu Usuário e Senha, para
          entrar na plataforma
        </p>
        <input />
        <input />
        <div className="optionsPassword">
          <div>Lembrar senha</div>
          <a>Esqueci minha senha</a>
        </div>
        <button className="login">Iniciar sessão</button>
        <p className="register">
          Não Tem uma Conta? <a>Clique aqui, e se Inscreva!</a>
        </p>
      </LoginContainer>
      <InfoContainer>
        <h1>Seja Bem Vindo ao E Agora José?</h1>
        <p>
          A plataforma que tem como missão, ajudar você a aprender e compreender
          as funcionalidades de seu celular!
        </p>
        {/* <div>
          <img src={OldManVector} />
        </div> */}
      </InfoContainer>
    </Container>
  );
};
