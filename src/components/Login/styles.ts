import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  padding: 0 6rem;

  img {
    border: 1px solid green;
    margin: 4rem 0;
    width: 5rem;
    height: 5rem;
  }

  h1 {
    font-size: 2.25rem;
    color: ${(props) => props.theme["black-300"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["black-200"]};
    margin-bottom: 2rem;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme["green-500"]};
  }

  input {
    display: flex;
    flex: 1;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme["gray-300"]};
    border-radius: 8px;
  }

  .optionsPassword {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .login {
    background-color: ${(props) => props.theme["green-400"]};
    color: ${(props) => props.theme["white"]};
    border: none;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  .register {
    display: flex;
    justify-content: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["green-400"]};

  h1 {
    color: ${(props) => props.theme["black-300"]};
    font-size: 2rem;
    margin: 4rem 0 1rem 0;
    padding: 0 2.5rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["black-300"]};
    margin-bottom: 4rem;
    padding: 0 2.5rem;
  }

  div {
    display: flex;
    align-self: flex-end;
    border: 1px solid red;
    width: 50%;
    height: 50%;
  }
`;
