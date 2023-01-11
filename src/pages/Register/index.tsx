import { Container, InfoContainer, RegisterContainer } from "./styles";
import CellphoneImage from "../../assets/cellphone-vector.svg";
import { ArrowLeft } from "phosphor-react";

export const Register = () => {
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
          <button className="backPage">
            <ArrowLeft size={32} color="#17191C" weight="bold" />
          </button>
          <h1>Olá Novo Aluno!</h1>
        </div>
        <p>
          Bem vindo a nossa plataforma! Por favor, preencha os campos a seguir
          ou entre com sua conta google, para se tornar o nosso mais novo aluno
        </p>
        <input placeholder="Nome Completo" />
        <input placeholder="Endereço de E-mail" />
        <input placeholder="Nome do Usuário" />
        <input placeholder="Senha" />
        <button className="login">Registrar-se</button>
      </RegisterContainer>
    </Container>
  );
};
